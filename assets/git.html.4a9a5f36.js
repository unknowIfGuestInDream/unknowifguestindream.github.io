const e=JSON.parse('{"key":"v-31d5af50","path":"/software/vscode/guide/git.html","title":"Git \u96C6\u6210","lang":"zh-CN","frontmatter":{"title":"Git \u96C6\u6210","icon":"git","category":["VS Code"],"tag":["VS Code","\u8F6F\u4EF6"],"summary":"\u952E\u76D8\u5FEB\u6377\u952E: Ctrl + Shift + G VS Code \u6709\u5F00\u7BB1\u5373\u7528\u7684 Git \u96C6\u6210\u3002\u60A8\u53EF\u4EE5\u4ECE\u6269\u5C55\u5E02\u573A\u4E2D\u5B89\u88C5\u5176\u4ED6 SCM \u63D0\u4F9B\u7A0B\u5E8F\u3002\u672C\u8282\u63CF\u8FF0\u4E86 Git \u96C6\u6210\u3002 \u5DEE\u5F02 \u4ECE \u6E90\u4EE3\u7801\u7BA1\u7406 \u89C6\u56FE\u4E2D\uFF0C\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u4EE5\u6253\u5F00\u5DEE\u5F02\u3002 \u89C6\u56FE\u5E03\u5C40 \u5DEE\u5F02\u7684\u9ED8\u8BA4\u89C6\u56FE\u662F\u5E76\u6392\u89C6\u56FE\u3002 \u5207\u6362\u5185\u5D4C\u89C6\u56FE: \u70B9\u51FB\u66F4\u591A\u64CD\u4F5C\u53F3\u4E0A\u89D2(...)\u6309\u94AE\uFF0C\u7136\u540E\u9009\u62E9\u5207\u6362\u5185\u5D4C\u89C6\u56FE\u3002 \u5982\u679C\u60A8\u559C\u6B22\u5D4C\u5165\u5F0F\u89C6\u56FE\uFF0C\u53EF\u4EE5","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/software/vscode/guide/git.html"}],["meta",{"property":"og:site_name","content":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2"}],["meta",{"property":"og:title","content":"Git \u96C6\u6210"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-08T10:03:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"ja-JP"}],["meta",{"property":"article:tag","content":"VS Code"}],["meta",{"property":"article:tag","content":"\u8F6F\u4EF6"}],["meta",{"property":"article:modified_time","content":"2022-10-08T10:03:39.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://blog.tlcsdm.com/en/software/vscode/guide/git.html"}],["link",{"rel":"alternate","hreflang":"ja-jp","href":"https://blog.tlcsdm.com/ja/software/vscode/guide/git.html"}]]},"excerpt":"","headers":[{"level":2,"title":"\u5DEE\u5F02","slug":"\u5DEE\u5F02","link":"#\u5DEE\u5F02","children":[{"level":3,"title":"\u89C6\u56FE\u5E03\u5C40","slug":"\u89C6\u56FE\u5E03\u5C40","link":"#\u89C6\u56FE\u5E03\u5C40","children":[]},{"level":3,"title":"\u5BA1\u67E5\u7A97\u683C","slug":"\u5BA1\u67E5\u7A97\u683C","link":"#\u5BA1\u67E5\u7A97\u683C","children":[]},{"level":3,"title":"\u7F16\u8F91\u5F85\u5904\u7406\u7684\u66F4\u6539","slug":"\u7F16\u8F91\u5F85\u5904\u7406\u7684\u66F4\u6539","link":"#\u7F16\u8F91\u5F85\u5904\u7406\u7684\u66F4\u6539","children":[]}]},{"level":2,"title":"\u5206\u652F","slug":"\u5206\u652F","link":"#\u5206\u652F","children":[]},{"level":2,"title":"\u6682\u5B58","slug":"\u6682\u5B58","link":"#\u6682\u5B58","children":[{"level":3,"title":"\u6682\u5B58\u6587\u4EF6\u66F4\u6539","slug":"\u6682\u5B58\u6587\u4EF6\u66F4\u6539","link":"#\u6682\u5B58\u6587\u4EF6\u66F4\u6539","children":[]},{"level":3,"title":"\u64A4\u6D88\u6700\u540E\u63D0\u4EA4","slug":"\u64A4\u6D88\u6700\u540E\u63D0\u4EA4","link":"#\u64A4\u6D88\u6700\u540E\u63D0\u4EA4","children":[]}]},{"level":2,"title":"\u67E5\u770B Git \u8F93\u51FA","slug":"\u67E5\u770B-git-\u8F93\u51FA","link":"#\u67E5\u770B-git-\u8F93\u51FA","children":[]},{"level":2,"title":"\u589E\u5220\u6307\u793A","slug":"\u589E\u5220\u6307\u793A","link":"#\u589E\u5220\u6307\u793A","children":[]},{"level":2,"title":"\u89E3\u51B3\u5408\u5E76\u51B2\u7A81","slug":"\u89E3\u51B3\u5408\u5E76\u51B2\u7A81","link":"#\u89E3\u51B3\u5408\u5E76\u51B2\u7A81","children":[]}],"git":{"createdTime":1665153728000,"updatedTime":1665223419000,"contributors":[{"name":"\u68A6\u91CC\u4E0D\u77E5\u8EAB\u662F\u5BA2","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":1.82,"words":546},"filePathRelative":"software/vscode/guide/git.md","localizedDate":"2022\u5E7410\u67087\u65E5"}');export{e as data};