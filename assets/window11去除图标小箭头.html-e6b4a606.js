const e=JSON.parse('{"key":"v-1f9ab3d9","path":"/%E9%97%B2%E6%97%B6%E5%B0%8F%E8%AE%B0/window11%E5%8E%BB%E9%99%A4%E5%9B%BE%E6%A0%87%E5%B0%8F%E7%AE%AD%E5%A4%B4.html","title":"window11去除图标小箭头","lang":"zh-CN","frontmatter":{"description":"window11去除图标小箭头 去除快捷方式小箭头 reg add \\"HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Explorer\\\\Shell Icons\\" /v 29 /d \\"%systemroot%\\\\system32\\\\imageres.dll,197\\" /t reg_sz /f taskkill /f /im explorer.exe attrib -s -r -h \\"%userprofile%\\\\AppData\\\\Local\\\\iconcache.db\\" del \\"%userprofile%\\\\AppData\\\\Local\\\\iconcache.db\\" /f /q start explorer pause","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/Lin-Note-v3/%E9%97%B2%E6%97%B6%E5%B0%8F%E8%AE%B0/window11%E5%8E%BB%E9%99%A4%E5%9B%BE%E6%A0%87%E5%B0%8F%E7%AE%AD%E5%A4%B4.html"}],["meta",{"property":"og:site_name","content":"Lin-Note"}],["meta",{"property":"og:title","content":"window11去除图标小箭头"}],["meta",{"property":"og:description","content":"window11去除图标小箭头 去除快捷方式小箭头 reg add \\"HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Explorer\\\\Shell Icons\\" /v 29 /d \\"%systemroot%\\\\system32\\\\imageres.dll,197\\" /t reg_sz /f taskkill /f /im explorer.exe attrib -s -r -h \\"%userprofile%\\\\AppData\\\\Local\\\\iconcache.db\\" del \\"%userprofile%\\\\AppData\\\\Local\\\\iconcache.db\\" /f /q start explorer pause"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-18T15:20:10.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-18T15:20:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"window11去除图标小箭头\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-18T15:20:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"去除快捷方式小箭头","slug":"去除快捷方式小箭头","link":"#去除快捷方式小箭头","children":[]},{"level":2,"title":"恢复快捷方式小箭头","slug":"恢复快捷方式小箭头","link":"#恢复快捷方式小箭头","children":[]},{"level":2,"title":"操作方法","slug":"操作方法","link":"#操作方法","children":[]},{"level":2,"title":"缺点","slug":"缺点","link":"#缺点","children":[]},{"level":2,"title":"根本解决方案","slug":"根本解决方案","link":"#根本解决方案","children":[]}],"git":{"createdTime":1687101610000,"updatedTime":1687101610000,"contributors":[{"name":"Jack_Lin","email":"1351123861@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"闲时小记/window11去除图标小箭头.md","localizedDate":"2023年6月18日","excerpt":"<h1> window11去除图标小箭头</h1>\\n<h2> 去除快捷方式小箭头</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>reg <span class=\\"token function\\">add</span> <span class=\\"token string\\">\\"HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion<span class=\\"token entity\\" title=\\"\\\\E\\">\\\\E</span>xplorer\\\\Shell Icons\\"</span> /v <span class=\\"token number\\">29</span> /d <span class=\\"token string\\">\\"%systemroot%\\\\system32\\\\imageres.dll,197\\"</span> /t reg_sz /f\\ntaskkill /f /im explorer.exe\\nattrib <span class=\\"token parameter variable\\">-s</span> <span class=\\"token parameter variable\\">-r</span> <span class=\\"token parameter variable\\">-h</span> <span class=\\"token string\\">\\"%userprofile%\\\\AppData\\\\Local\\\\iconcache.db\\"</span>\\ndel <span class=\\"token string\\">\\"%userprofile%\\\\AppData\\\\Local\\\\iconcache.db\\"</span> /f /q\\nstart explorer\\npause\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
