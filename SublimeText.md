# Sublime Text 个人使用及配置

## 自定义配置

```json5
{
    // 高亮当前行
    "highlight_line": true,
    // 选中的文本按Ctrl + f时，自动复制到查找面板的文本框里
    "find_selected_text": true,
    // 使得同一个窗口中可以打开多个标签页
    "open_files_in_new_window": false,
    // 设true时，一但最后一个文件关闭将关闭程序窗口，除非窗口中打开了文件夹。
    "close_windows_when_empty": true,
    // 光标样式
    "caret_style": "smooth",
    // 允许滚动超过缓冲区末尾的距离
    "scroll_past_end": 0.3,
    // 不检查更新
    "update_check":false,
    "theme": "auto",
    "color_scheme": "Mariana.sublime-color-scheme",
    "ignored_packages":
    [
		"Vintage",
    ],
    "index_files": true,
}
```

## 插件

- Localization：语言包
- ConvertToUTF8：编码转换
- Semantic Highlighter：当前光标下的单词，自动高亮相似变量

## 其他

- https://linghuam.github.io/2018/01/04/sublime常用插件/