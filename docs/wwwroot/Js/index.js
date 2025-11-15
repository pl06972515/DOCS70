
window.$docsify = {

    repo: 'true',
    corner: {
        url: "https://github.com/pl06972515/DOCS73",
        icon: "Github", //Github Gitlab Spring 
        //icon: "https://gitee.com/s_origins/ImageStorage/raw/master/PicGo_Typora/20201220213510.png",
        //width: 40,
        //height: 40
    },

    name: 'Home',
    logo: 'wwwroot/images/Home.svg',
    nameLink: '#README.md',
    auto2top: true, 
    mergeNavbar: true,
	
    /*... 导航 ...*/
    loadSidebar: true,
    maxLevel: 3,
    subMaxLevel: 3,

    /*... 插件设置 ...*/
    search: { placeholder: '标题检索', noData: '暂无数据!', depth: 3, namespace: 'DOCS73"', hideOtherSidebarContent: false },
    copyCode: { buttonText: '点击复制', errorText: 'Error', successText: '已复制到剪贴板' },
    themeable: {
        readyTransition: true,
        responsiveTables: true
    },
    formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}',
    plugins: [
        function (hook) {
            var footer = [
                '<hr/>',
                '<footer style="text-align: right;">',
				'<span>&copy;2020</span>',
                '&nbsp;&nbsp;&nbsp;<a href="tencent://message/?uin=372577325" style="color:#008B00">💥桑云龙</a>',
                '</footer>'
            ].join('');

            hook.afterEach(function (html) {
                return html + footer;
            });
        }
    ],
    select: {
        detectOperatingSystem: { enabled: true, menuId: "operating-system" },
        sync: false,
        theme: "classic",
    },
    tabs: {
        sync: false,
        theme: "classic",
    },

}

