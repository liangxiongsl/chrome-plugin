
// (0) 初始化
chrome.runtime.onInstalled.addListener((details)=>{
    // (1) 后端
    // ===== 消息
    chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
        console.log('received a message')
    })
    chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse)=>{
        console.log('received a external message')
    })
    chrome.runtime.onUserScriptMessage.addListener((message, sender, sendResponse)=>{
        console.log('received a UserScript message')
    })

    // (2) 前端
    // ===== commands 命令
    chrome.commands.onCommand.addListener((command, tab)=>{
        switch (command){
            case 'example-cmd':
                console.log('example command: ', tab)
                break
        }
    })
    // ===== content menus 上下文菜单
    let contexts = ['page', 'frame', 'selection', 'link', 'editable', 'image', 'video', 'audio', 'browser_action', 'page_action', 'action']
    contexts.forEach((v,i)=>{
        chrome.contextMenus.create({
            id: `item-${v}`,
            title: `item ${v}`,
            // normal, checkbox, radio, separator
            type: 'normal',
            contexts: [v]
        })
    })
    chrome.contextMenus.onClicked.addListener((info, tab)=>{
        console.log("contextMenus: ", info.menuItemId, tab)
    })

    // ===== omnibox 多功能搜索框
    chrome.omnibox.onInputEntered.addListener((text, disposition)=>{
        console.log("omnibox: ", text)
    })
})





