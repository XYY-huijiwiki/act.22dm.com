package main

import (
	"bytes"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"runtime"
	"sync"
)

func main() {
	baseURL := "http://act.22dm.com/"
	initialURL := baseURL + "index.html"
	targetDir := "./act.22dm.com"

	// 步骤1: 初始下载
	log.Println("开始初始下载...")
	if err := runWget(initialURL); err != nil {
		log.Fatalf("初始下载失败: %v", err)
	}

	// 已处理的URL集合
	processed := make(map[string]bool)
	var mutex sync.Mutex

	// 正则表达式模式
	pattern := `assets/[^"']+-[0-9a-z]{8}\.(?:js|css)`
	re := regexp.MustCompile(pattern)

	for {
		newFound := false
		log.Println("扫描文件寻找资源引用...")

		// 步骤2: 扫描文件并匹配资源
		matches := make(map[string]bool)
		err := filepath.Walk(targetDir, func(path string, info os.FileInfo, err error) error {
			if err != nil || info.IsDir() {
				return nil
			}

			content, err := os.ReadFile(path)
			if err != nil {
				return nil
			}

			found := re.FindAll(content, -1)
			for _, match := range found {
				url := baseURL + string(match)
				matches[url] = true
			}
			return nil
		})

		if err != nil {
			log.Printf("文件扫描错误: %v", err)
		}

		// 步骤3: 下载新发现的资源
		log.Println("处理新发现的资源...")
		for url := range matches {
			mutex.Lock()
			alreadyProcessed := processed[url]
			mutex.Unlock()

			if alreadyProcessed {
				continue
			}

			log.Printf("下载新资源: %s", url)
			if err := runWget(url); err != nil {
				log.Printf("下载失败(已跳过): %s - %v", url, err)
			}

			mutex.Lock()
			processed[url] = true
			mutex.Unlock()
			newFound = true
		}

		// 步骤4: 如果没有新内容则退出
		if !newFound {
			log.Println("未发现新资源，退出程序")
			break
		}
	}
}

func runWget(url string) error {
	// 获取当前可执行文件所在目录
	exeDir, err := os.Getwd()
	if err != nil {
		return fmt.Errorf("无法获取当前目录: %w", err)
	}

	// 构造wget.exe的完整路径
	wgetPath := "wget"
	if runtime.GOOS == "windows" {
		wgetPath = filepath.Join(exeDir, "wget.exe") // 非Windows系统
	}

	cmd := exec.Command(wgetPath,
		"--no-check-certificate",
		"-e", "robots=off",
		"-r", "-l", "inf",
		"-k", "-p", "-E", "-nc", "-N", "-H",
		"-P", ".",
		url,
	)

	// 捕获输出而不是直接打印到控制台
	var stderr bytes.Buffer
	cmd.Stderr = &stderr

	if err := cmd.Run(); err != nil {
		return fmt.Errorf("%w (stderr: %s)", err, stderr.String())
	}
	return nil
}
