import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as i,d as s,w as o,f as n,a as e,e as t}from"./app-COrYw2cZ.js";const d={},r=n('<h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本"><span>文本</span></a></h2><p>元素中的文本是布置在元素的内容框中。以内容区域的左上角作为起点 (或者是右上角，是在 RTL 语言的情况下)，一直延续到行的结束部分。一旦达到行的尽头，它就会进到下一行，然后继续，再接着下一行，直到所有内容都放入了盒子中。文本内容表现地像一些内联元素，被布置到相邻的行上，除非到达了行的尽头，否则不会换行，或者您想强制地手动造成换行的话，您可以使用 <code>&lt;br&gt;</code> 元素。</p><p>用于样式文本的 CSS 属性通常可以分为两类:</p><ul><li><strong>字体样式</strong>: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。</li><li><strong>文本布局风格</strong>: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐。</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>包含在元素中的文本是作为一个单一的实体。您不能将文字其中一部分选中或添加样式。</p><p>如果您要这么做，那么您必须要用适合的元素来包装它们，比如 (<code>&lt;span&gt;</code> 或者 <code>&lt;strong&gt;</code>)。</p><p>您也可以使用伪元素，比如 <code>::first-letter</code> (选中元素文本的第一个字母), <code>::first-line</code> (选中元素文本的第一行), 或者 <code>::selection</code> (当前光标双击选中的文本)</p></div><h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体"><span>字体</span></a></h2><h3 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h3><p><code>color</code> 属性设置选中元素的前景内容的颜色 (通常指文本，也包括诸如 <code>text-decoration</code> 属性设置的文本下方或上方的线)。</p><p>color 也可以接受任何合法的 CSS 颜色单位。</p>',9),u=e("div",{class:"language-html","data-ext":"html","data-title":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("p")]),e("span",{class:"token punctuation"},">")]),t("我是红色"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("p")]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),h=e("div",{class:"language-css","data-ext":"css","data-title":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},"p"),t(),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token property"},"color"),e("span",{class:"token punctuation"},":"),t(" red"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),k=n(`<h3 id="字体种类" tabindex="-1"><a class="header-anchor" href="#字体种类"><span>字体种类</span></a></h3><p>要在您的文本上设置一个不同的字体，您可以使用 font-family 属性，这个允许您为浏览器指定一个字体 (或者一个字体的列表)，然后浏览器可以将这种字体应用到选中的元素上。浏览器只会把在当前机器上可用的字体应用到当前正在访问的网站上；如果字体不可用，那么就会用浏览器默认的字体代替。</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> arial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="网页安全字体" tabindex="-1"><a class="header-anchor" href="#网页安全字体"><span>网页安全字体</span></a></h4><p>只有某几个字体通常可以应用到所有系统，因此可以毫无顾忌地使用。这些都是所谓的<strong>网页安全字体</strong>。</p><table><thead><tr><th>字体名称</th><th>泛型</th><th>注意</th></tr></thead><tbody><tr><td>Arial</td><td>sans-serif</td><td>通常认为最佳做法还是添加 Helvetica 作为 Arial 的首选替代品，尽管它们的字体面几乎相同，但 Helvetica 被认为具有更好的形状，即使 Arial 更广泛地可用。</td></tr><tr><td>Courier New</td><td>monospace</td><td>某些操作系统有一个 Courier New 字体的替代(可能较旧的)版本叫 Courier。使用 Courier New 作为 Courier 的首选替代方案，被认为是最佳做法。</td></tr><tr><td>Georgia</td><td>serif</td><td></td></tr><tr><td>Times New Roman</td><td>serif</td><td>某些操作系统有一个 Times New Roman 字体的替代(可能较旧的)版本叫 Times。使用 Times 作为 Times New Roman 的首选替代方案，被认为是最佳做法。</td></tr><tr><td>Trebuchet MS</td><td>sans-serif</td><td>您应该小心使用这种字体——它在移动操作系统上并不广泛。</td></tr><tr><td>Verdana</td><td>sans-serif</td><td></td></tr></tbody></table><h4 id="默认字体" tabindex="-1"><a class="header-anchor" href="#默认字体"><span>默认字体</span></a></h4><p>CSS 定义了 5 个常用的字体名称: <code>serif</code>, <code>sans-serif</code>, <code>monospace</code>, <code>cursive</code>,和 <code>fantasy</code>. 这些都是非常通用的，当使用这些通用名称时，使用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同。</p><p>五个名称定义如下:</p><table><thead><tr><th>名称</th><th>定义</th></tr></thead><tbody><tr><td>serif</td><td>有衬线的字体 (衬线一词是指字体笔画尾端的小装饰，存在于某些印刷体字体中)</td></tr><tr><td>sans-serif</td><td>没有衬线的字体。</td></tr><tr><td>monospace</td><td>每个字符具有相同宽度的字体，通常用于代码列表。</td></tr><tr><td>cursive</td><td>用于模拟笔迹的字体，具有流动的连接笔画。</td></tr><tr><td>fantasy</td><td>用来装饰的字体</td></tr></tbody></table><h4 id="字体栈" tabindex="-1"><a class="header-anchor" href="#字体栈"><span>字体栈</span></a></h4><p>由于您无法保证您想在您的网页上使用的字体的可用性 (甚至一个网络字体可能由于某些原因而出错), 您可以提供一个字体栈 (font stack)，这样的话，浏览器就有多种字体可以选择了。只需包含一个 <code>font-family</code> 属性，其值由几个用逗号分离的字体名称组成。</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Trebuchet MS&quot;</span><span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>浏览器从列表的第一个开始，然后查看在当前机器中，这个字体是否可用。如果可用，就把这个字体应用到选中的元素中。如果不可用，它就移到列表中的下一个字体，然后再检查。在字体栈的最后提供一个合适的通用的字体名称是个不错的办法，这样的话，即使列出的字体都无法使用，浏览器至少可以提供一个还算合适的选择。</p><h3 id="字体大小" tabindex="-1"><a class="header-anchor" href="#字体大小"><span>字体大小</span></a></h3><p>字体大小可以通过 font-size 属性设置。</p><p>常用单位:</p><ul><li>px (像素): 将像素的值赋予给您的文本。这是一个绝对单位， 它导致了在任何情况下，页面上的文本所计算出来的像素值都是一样的。</li><li>em: 1em 等于我们设计的当前元素的父元素上设置的字体大小。如果您有大量设置了不同字体大小的嵌套元素，可能会变得复杂。</li><li>rem: 这个单位的效果和 em 差不多，除了 1rem 等于 HTML 中的根元素的字体大小(即 <code>&lt;html&gt;</code>) ，而不是父元素。这可以让您更容易计算字体大小。</li></ul><p>元素的 font-size 属性是从该元素的父元素继承的。所以这一切都是从整个文档的根元素 <code>&lt;html&gt;</code> 开始，浏览器的 font-size 标准设置的值为 16px。在根元素中的任何段落 (或者那些浏览器没有设置默认大小的元素)，会有一个最终的大小值: 16px。其他元素也许有默认的大小，比如 <code>&lt;h1&gt;</code> 元素有一个 2em 的默认值，所以它的最终大小值为 32px。</p>`,19),g=e("div",{class:"language-html","data-ext":"html","data-title":"html"},[e("pre",{class:"language-html"},[e("code",null,[e("span",{class:"token comment"},"<!-- 文档 font-size 为 16px -->"),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("article")]),e("span",{class:"token punctuation"},">")]),t(`
  `),e("span",{class:"token comment"},"<!-- 如何给出 20px 的字体大小 -->"),t(`
  `),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("p")]),e("span",{class:"token punctuation"},">")]),t("段落文字"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("p")]),e("span",{class:"token punctuation"},">")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("article")]),e("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),f=e("div",{class:"language-css","data-ext":"css","data-title":"css"},[e("pre",{class:"language-css"},[e("code",null,[e("span",{class:"token selector"},"article"),t(),e("span",{class:"token punctuation"},"{"),t(`
  `),e("span",{class:"token property"},"font-size"),e("span",{class:"token punctuation"},":"),t(" 1.5em"),e("span",{class:"token punctuation"},";"),t(`
`),e("span",{class:"token punctuation"},"}"),t(`
`)])])],-1),m=e("p",null,"很容易计算 article 字体大小为 24px，那么 p 的字体大小就要为 0.83333333em",-1),x=n(`<h3 id="字体样式-字体粗细-文本转换和文本装饰" tabindex="-1"><a class="header-anchor" href="#字体样式-字体粗细-文本转换和文本装饰"><span>字体样式，字体粗细，文本转换和文本装饰</span></a></h3><p>CSS 提供了 4 种常用的属性来改变文本的样子:</p><h3 id="font-style" tabindex="-1"><a class="header-anchor" href="#font-style"><span>font-style</span></a></h3><p>用来设置文本斜体。可能的值如下:</p><ul><li><code>normal</code>: 将文本设置为普通字体 (将存在的斜体关闭)</li><li><code>italic</code>: 如果当前字体的斜体版本可用，那么文本设置为斜体版本；如果不可用，那么会利用 <code>oblique</code> 状态来模拟 italics。</li><li><code>oblique</code>: 将文本设置为斜体字体的模拟版本，也就是将普通文本倾斜的样式应用到文本中。</li></ul><h3 id="font-weight" tabindex="-1"><a class="header-anchor" href="#font-weight"><span>font-weight</span></a></h3><p>设置文字的粗体大小。这里有很多值可选 (比如 <code>light</code>, <code>normal</code>, <code>bold</code>, <code>extrabold</code>, <code>black</code>)</p><ul><li><code>normal</code>, <code>bold</code>: 普通或者<strong>加粗</strong>的字体粗细</li><li><code>lighter</code>, <code>bolder</code>: 将当前元素的粗体设置为比其父元素粗体更细或更粗一步。</li><li>100 – 900: 数值粗体值，如果需要，可提供比上述关键字更精细的粒度控制。</li></ul><h3 id="text-transform" tabindex="-1"><a class="header-anchor" href="#text-transform"><span>text-transform</span></a></h3><p>允许您设置要转换的字体。值包括:</p><ul><li><code>none</code>: 防止任何转型。</li><li><code>uppercase</code>: 将所有文本转为大写。</li><li><code>lowercase</code>: 将所有文本转为小写。</li><li><code>capitalize</code>: 转换所有单词让其首字母大写。</li><li><code>full-width</code>: 将所有字形转换成全角，即固定宽度的正方形，类似于等宽字体，允许拉丁字符和亚洲语言字形(如中文，日文，韩文)对齐。</li></ul><h3 id="text-decoration" tabindex="-1"><a class="header-anchor" href="#text-decoration"><span>text-decoration</span></a></h3><p>设置/取消字体上的文本装饰，主要使用此方法在设置链接时取消设置链接上的默认下划线。可用值为:</p><ul><li><code>none</code>: 取消已经存在的任何文本装饰。</li><li><code>underline</code>: 文本下划线.</li><li><code>overline</code>: 文本上划线</li><li><code>line-through</code>: 穿过文本的线，可以创造删除线。</li></ul><p><code>text-decoration</code> 可以一次接受多个值，比如 <code>text-decoration: underline overline</code>。</p><p><code>text-decoration</code> 是一个缩写形式，它由 <code>text-decoration-line</code>, <code>text-decoration-style</code> 和 <code>text-decoration-color</code> 构成。您可以使用这些属性值的组合来创建有趣的效果，比如 <code>text-decoration: line-through red wavy</code>。</p><h3 id="文字阴影" tabindex="-1"><a class="header-anchor" href="#文字阴影"><span>文字阴影</span></a></h3><p>您可以使用 <code>text-shadow</code> 属性为您的文本应用阴影。</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">text-shadow</span><span class="token punctuation">:</span> 4px 4px 5px red<span class="token punctuation">;</span>
</code></pre></div><p>4 个属性如下:</p><ol><li>阴影与原始文本的水平偏移: 可以使用大多数的 CSS 长度和尺寸单位, 但是 px 是比较合适的。这个值必须指定。</li><li>阴影与原始文本的垂直偏移: 效果基本上就像水平偏移，除了它向上/向下移动阴影，而不是左/右。这个值必须指定。</li><li>模糊半径: 更高的值意味着阴影分散得更广泛。如果不包含此值，则默认为 0，这意味着没有模糊。可以使用大多数的 CSS 长度和尺寸单位.</li><li>阴影的基础颜色: 可以使用大多数的 CSS 颜色单位. 如果没有指定，默认为 <code>black</code>.</li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><p>正偏移值会向右向下移动阴影，但也可以使用负偏移值来向左向上移动阴影，例如 <code>-1px -1px</code>.</p></div><h4 id="多种阴影" tabindex="-1"><a class="header-anchor" href="#多种阴影"><span>多种阴影</span></a></h4><p>您可以通过包含以逗号分隔的多个阴影值，将多个阴影应用于同一文本</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">text-shadow</span><span class="token punctuation">:</span>
  -1px -1px 1px #aaa<span class="token punctuation">,</span>
  0px 4px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
  4px 4px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">,</span>
  0px 0px 7px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="文本布局" tabindex="-1"><a class="header-anchor" href="#文本布局"><span>文本布局</span></a></h2><h3 id="文本对齐" tabindex="-1"><a class="header-anchor" href="#文本对齐"><span>文本对齐</span></a></h3><p><code>text-align</code> 属性用来控制文本如何和它所在的内容盒子对齐。可用值如下，并且在与常规文字处理器应用程序中的工作方式几乎相同:</p><ul><li><p><code>left</code>: 左对齐文本。</p></li><li><p><code>right</code>: 右对齐文本。</p></li><li><p><code>center</code>: 居中文字</p></li><li><p><code>justify</code>: 使文本展开，改变单词之间的差距，使所有文本行的宽度相同。</p><p>您需要仔细使用，它可以看起来很可怕。特别是当应用于其中有很多长单词的段落时。如果您要使用这个，您也应该考虑一起使用别的东西，比如 <code>hyphens</code>，打破一些更长的词语。</p></li></ul><h3 id="行高" tabindex="-1"><a class="header-anchor" href="#行高"><span>行高</span></a></h3><p><code>line-height</code> 属性设置文本每行之间的高，可以接受大多数长度与尺寸单位，不过也可以设置一个无单位的值，作为乘数。</p><p>通常无单位是比较好的做法。行高由此值乘以 <code>font-size</code> 生成。</p><p>当行与行之间拉开空间，正文文本通常看起来更好更容易阅读。推荐的行高大约是 1.5–2 (双倍间距)。</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
</code></pre></div><h3 id="字母和单词间距" tabindex="-1"><a class="header-anchor" href="#字母和单词间距"><span>字母和单词间距</span></a></h3><p><code>letter-spacing</code> 和 <code>word-spacing</code> 属性允许您设置您的文本中的字母与字母之间的间距、或是单词与单词之间的间距，可以接受大多数长度与尺寸单位。</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p::first-line</span> <span class="token punctuation">{</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
  <span class="token property">word-spacing</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="其他属性" tabindex="-1"><a class="header-anchor" href="#其他属性"><span>其他属性</span></a></h2><h3 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式"><span>字体样式</span></a></h3><ul><li><code>font-variant</code>: 在小型大写字母和普通文本选项之间切换。</li><li><code>font-kerning</code>: 开启或关闭字体间距选项。</li><li><code>font-feature-settings</code>: 开启或关闭不同的 OpenType 字体特性。</li><li><code>font-variant-alternates</code>: 控制给定的自定义字体的替代字形的使用。</li><li><code>font-variant-caps</code>: 控制大写字母替代字形的使用。</li><li><code>font-variant-east-asian</code>: 控制东亚文字替代字形的使用, 像日语和汉语。</li><li><code>font-variant-ligatures</code>: 控制文本中使用的连写和上下文形式。</li><li><code>font-variant-numeric</code>: 控制数字，分式和序标的替代字形的使用。</li><li><code>font-variant-position</code>: 控制位于上标或下标处，字号更小的替代字形的使用。</li><li><code>font-size-adjust</code>: 独立于字体的实际大小尺寸，调整其可视大小尺寸。</li><li><code>font-stretch</code>: 在给定字体的可选拉伸版本中切换。</li><li><code>text-underline-position</code>: 指定下划线的排版位置，通过使用 <code>text-decoration-line</code> 属性的 <code>underline</code> 值。</li><li><code>text-rendering</code>: 尝试执行一些文本渲染优化。</li></ul><h3 id="文本布局样式" tabindex="-1"><a class="header-anchor" href="#文本布局样式"><span>文本布局样式</span></a></h3><ul><li><code>text-indent</code>: 指定文本内容的第一行前面应该留出多少的水平空间。</li><li><code>text-overflow</code>: 定义如何向用户表示存在被隐藏的溢出内容。</li><li><code>white-space</code>: 定义如何处理元素内部的空白和换行。</li><li><code>word-break</code>: 指定是否能在单词内部换行。</li><li><code>direction</code>: 定义文本的方向 (这取决于语言，并且通常最好让 HTML 来处理这部分，因为它是和文本内容相关联的。)</li><li><code>hyphens</code>: 为支持的语言开启或关闭连字符。</li><li><code>line-break</code>: 对东亚语言采用更强或更弱的换行规则。</li><li><code>text-align-last</code>: 定义一个块或行的最后一行，恰好位于一个强制换行前时，如何对齐。</li><li><code>text-orientation</code>: 定义行内文本的方向。</li><li><code>word-wrap</code>: 指定浏览器是否可以在单词内换行以避免超出范围。</li><li><code>writing-mode</code>: 定义文本行布局为水平还是垂直，以及后继文本流的方向。</li></ul><h2 id="font-简写" tabindex="-1"><a class="header-anchor" href="#font-简写"><span>Font 简写</span></a></h2><p>许多字体的属性也可以通过 font 的简写方式来设置。</p><p>您应该按照以下顺序来写:</p><ul><li><code>font-style</code></li><li><code>font-variant</code></li><li><code>font-weight</code></li><li><code>font-stretch</code></li><li><code>font-size</code></li><li><code>line-height</code></li><li><code>font-family</code></li></ul><p>如果您想要使用 font 的简写形式，在所有这些属性中，只有 <code>font-size</code> 和 <code>font-family</code> 是一定要指定的。另外 <code>font-size</code> 和 <code>line-height</code> 属性之间必须放一个正斜杠。</p><p><strong>案例</strong>:</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">font</span><span class="token punctuation">:</span>
  italic normal bold normal 3em/1.5 Helvetica<span class="token punctuation">,</span>
  Arial<span class="token punctuation">,</span>
  sans-serif<span class="token punctuation">;</span>
</code></pre></div><h2 id="web-字体" tabindex="-1"><a class="header-anchor" href="#web-字体"><span>Web 字体</span></a></h2><p>Web 字体是一种 CSS 特性，允许您指定在访问时随您的网站一起下载的字体文件，这意味着任何支持 Web 字体的浏览器都可以使用您指定的字体。</p><p>首先，您需要尽早声明 <code>@font-face</code> 块，它指定要下载的字体文件:</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;myFont&quot;</span><span class="token punctuation">;</span>
  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;myFont.ttf&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>之后，您就可以使用 <code>@font-face</code> 中指定的字体种类名称来将您的定制字体应用到您喜欢的任何东西上，如:</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;myFont&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bitstream Vera Serif&quot;</span><span class="token punctuation">,</span> serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>关于网页字体有两件重要的事情要记住:</p><ol><li>浏览器支持不同的字体格式，因此您需要多种字体格式以获得良好的跨浏览器支持。例如,大多数现代浏览器都支持 WOFF / WOFF2(Web Open Font Format versions 1 and 2，Web 开放字体格式版本 1 和 2)，它是最有效的格式，但是旧版本 IE 只支持 EOT (Embedded Open Type，嵌入式开放类型)的字体,您可能需要包括一个 SVG 版本的字体支持旧版本的 iPhone 和 Android 浏览器。</li><li>字体一般都不能自由使用。您必须为他们付费，或者遵循其他许可条件，比如在代码中(或者在您的站点上)提供字体创建者。您不应该在没有适当的授权的情况下偷窃字体。</li></ol>`,57);function b(y,v){const a=l("CodeDemo");return p(),i("div",null,[r,s(a,{id:"code-demo-44",type:"normal",title:"%E5%AD%97%E4%BD%93%E9%A2%9C%E8%89%B2",code:"eJyrVsooyc1RslKyKbB71jHx2Yz1z3ctetG5yUa/wC4mT0lHKbm4GChboFAdk6egkJyfk19kpVCUmmIdk1cLlK8FAGGYGRs="},{default:o(()=>[u,h]),_:1}),k,s(a,{id:"code-demo-246",type:"normal",title:"em%20%E7%9A%84%E8%AE%A1%E7%AE%97",code:"eJyrVsooyc1RslKyUdTVVXg2rf3ZwsUKafl5JbrFmVWpCk927FIwNCuoUNDVtYvJs0ksKslMzkkFMhUUwBqeLmt6snfq890zn7bvUjAyACp8Pqvl6drpT/ZOfrpk+dMN/RCNQNUFds/WbX0xYS/QCqC8jX4ByDx9hIFKOkrJxcVAh0CFFKpB2uAusVIw1DNNzbWOyasFqq0FAMKRS7g="},{default:o(()=>[g,f,m]),_:1}),x])}const C=c(d,[["render",b],["__file","font.html.vue"]]),S=JSON.parse('{"path":"/code/website/css/intro/font.html","title":"文字样式","lang":"zh-CN","frontmatter":{"title":"文字样式","icon":"format","date":"2019-09-05T00:00:00.000Z","order":4,"category":"CSS","description":"文本 元素中的文本是布置在元素的内容框中。以内容区域的左上角作为起点 (或者是右上角，是在 RTL 语言的情况下)，一直延续到行的结束部分。一旦达到行的尽头，它就会进到下一行，然后继续，再接着下一行，直到所有内容都放入了盒子中。文本内容表现地像一些内联元素，被布置到相邻的行上，除非到达了行的尽头，否则不会换行，或者您想强制地手动造成换行的话，您可以使用...","head":[["meta",{"property":"og:url","content":"https://blog.tlcsdm.com/code/website/css/intro/font.html"}],["meta",{"property":"og:site_name","content":"梦里不知身是客"}],["meta",{"property":"og:title","content":"文字样式"}],["meta",{"property":"og:description","content":"文本 元素中的文本是布置在元素的内容框中。以内容区域的左上角作为起点 (或者是右上角，是在 RTL 语言的情况下)，一直延续到行的结束部分。一旦达到行的尽头，它就会进到下一行，然后继续，再接着下一行，直到所有内容都放入了盒子中。文本内容表现地像一些内联元素，被布置到相邻的行上，除非到达了行的尽头，否则不会换行，或者您想强制地手动造成换行的话，您可以使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-03T05:28:44.000Z"}],["meta",{"property":"article:author","content":"unknowIfGuestInDream"}],["meta",{"property":"article:published_time","content":"2019-09-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-03T05:28:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文字样式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-03T05:28:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"unknowIfGuestInDream\\",\\"url\\":\\"https://tlcsdm.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.tlcsdm.com/atom.xml","title":"梦里不知身是客 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.tlcsdm.com/feed.json","title":"梦里不知身是客 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.tlcsdm.com/rss.xml","title":"梦里不知身是客 RSS Feed"}]]},"headers":[{"level":2,"title":"文本","slug":"文本","link":"#文本","children":[]},{"level":2,"title":"字体","slug":"字体","link":"#字体","children":[{"level":3,"title":"颜色","slug":"颜色","link":"#颜色","children":[]},{"level":3,"title":"字体种类","slug":"字体种类","link":"#字体种类","children":[]},{"level":3,"title":"字体大小","slug":"字体大小","link":"#字体大小","children":[]},{"level":3,"title":"字体样式，字体粗细，文本转换和文本装饰","slug":"字体样式-字体粗细-文本转换和文本装饰","link":"#字体样式-字体粗细-文本转换和文本装饰","children":[]},{"level":3,"title":"font-style","slug":"font-style","link":"#font-style","children":[]},{"level":3,"title":"font-weight","slug":"font-weight","link":"#font-weight","children":[]},{"level":3,"title":"text-transform","slug":"text-transform","link":"#text-transform","children":[]},{"level":3,"title":"text-decoration","slug":"text-decoration","link":"#text-decoration","children":[]},{"level":3,"title":"文字阴影","slug":"文字阴影","link":"#文字阴影","children":[]}]},{"level":2,"title":"文本布局","slug":"文本布局","link":"#文本布局","children":[{"level":3,"title":"文本对齐","slug":"文本对齐","link":"#文本对齐","children":[]},{"level":3,"title":"行高","slug":"行高","link":"#行高","children":[]},{"level":3,"title":"字母和单词间距","slug":"字母和单词间距","link":"#字母和单词间距","children":[]}]},{"level":2,"title":"其他属性","slug":"其他属性","link":"#其他属性","children":[{"level":3,"title":"字体样式","slug":"字体样式","link":"#字体样式","children":[]},{"level":3,"title":"文本布局样式","slug":"文本布局样式","link":"#文本布局样式","children":[]}]},{"level":2,"title":"Font 简写","slug":"font-简写","link":"#font-简写","children":[]},{"level":2,"title":"Web 字体","slug":"web-字体","link":"#web-字体","children":[]}],"git":{"createdTime":1665160537000,"updatedTime":1706938124000,"contributors":[{"name":"梦里不知身是客","email":"tang97155@gmail.com","commits":2}]},"readingTime":{"minutes":12.8,"words":3841},"filePathRelative":"code/website/css/intro/font.md","localizedDate":"2019年9月5日","excerpt":"","autoDesc":true}');export{C as comp,S as data};