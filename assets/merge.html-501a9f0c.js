import{_ as t,X as r,Y as d,a1 as c,Z as e,$ as i,H as l}from"./framework-0ff09816.js";const m={},s=e("h2",{id:"squash-merge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#squash-merge","aria-hidden":"true"},"#"),i(" Squash merge")],-1),n=e("p",null,[i("通过使用 "),e("code",null,"--squash"),i(" 选项，你可以在合并中将多个 commit 合并为一个。")],-1),a=e("p",null,"也就是对于以下的例子",-1),h=e("p",null,[e("code",null,"git merge feature"),i(" 得到的结果为:")],-1),p=e("p",null,[i("而如果 "),e("code",null,"feature"),i(" 分支意在实现一个完成的特性，两个 commit 只是工作进度实际上并不重要的时候，我们可以通过 "),e("code",null,"git merge --squash feature"),i(" 得到:")],-1),u=e("h2",{id:"cherry-pick",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cherry-pick","aria-hidden":"true"},"#"),i(" Cherry pick")],-1),_=e("p",null,"有些时候，我们可能需要提取其他分支的某个 commit，这个时候我们可以用 cherry pick 进行操作。",-1),y=e("p",null,[i("在这种情况下，我们可以回到 main 分支，执行 "),e("code",null,"git cherry-pick <commit id>"),i(" 来挑拣某个提交，当然，你可以一并在命令中提交挑拣多个 commit。")],-1),x=e("ul",null,[e("li",null,[e("code",null,"git cherry-pick <commit id 1> <commit id 2>"),i(" 表示挑拣 commit id 1 和 commit id 2")]),e("li",null,[e("code",null,"git cherry-pick <commit id 1>...<commit id 2>"),i(" 表示挑拣 commit id 1 与 commit id 2 之间 (包括两者) 的所有提交")]),e("li",null,[e("code",null,"git cherry-pick <branch>"),i(" 表示挑拣该分支最新的提交")])],-1);function k(L,B){const o=l("Mermaid");return r(),d("div",null,[s,n,a,c(o,{id:"mermaid-9",code:"eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUAoolFSXmJWcopKUmlpQWpaIqggqC1SVnpCZn55eWKIB0YpplhKIGn2moKqGm5aYWpafCtQEAlZs6wQ=="}),h,c(o,{id:"mermaid-13",code:"eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUQhVLS00sKS1KRRcGKTXCrhRdODe1KD0VKqDEBQBpQycY"}),p,c(o,{id:"mermaid-17",code:"eJxLzyxxL0osyOBSUEjOz83NLFHITLFSyk3MzDNUwhQzQhMrLixNLM5QyE0tSk9VKEotLs0pUeICAGwNGyw="}),u,_,c(o,{id:"mermaid-24",code:"eJxLzyxxL0osyOBSUEjOz83NLAEykooS85IzFHKLMvILUuESCpkpVkppqYklpUWpjgpGBqpKOKRMMKSSStMV0jIrcGkww22WBVQqIzU5O7+0RCE3MTMPwi8qqtQtyEzOxrAArhSf8w0NsBucm1qUngrTCgDhNlnE"}),y,c(o,{id:"mermaid-28",code:"eJx9j0sKhDAMQPdziiDMckBlGAZ3rjxHrbENEltCC3p7BT8brbuEx8sjhkIjytsXgHbMFNahFTVqCyzWeTwBUFdlPaoQBWso83eWQN8LaqOBnqYiZfxSRpky/rthUQ8uBmBF47aLzB9PeriG79mWOO88/Vzk91VGMXioC90zaig="}),x])}const z=t(m,[["render",k],["__file","merge.html.vue"]]);export{z as default};