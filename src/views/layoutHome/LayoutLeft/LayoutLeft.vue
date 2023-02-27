<template>
    <div style="width: 100%">
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>

        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
          <a-menu-item key="5">
            Option 5
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
          <a-menu-item key="9">
            Option 9
          </a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">
              Option 11
            </a-menu-item>
            <a-menu-item key="12">
              Option 12
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>

      </a-menu>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuList: [
            {
                id: 1001, 
                title: '系统首页',
                iconName: 'pie-chart'
            },
            {   
                id: 1002, 
                title: '组织架构',
                iconName: 'pie-chart',
                children:[
                    {
                        id: 100201,
                        title: '组织管理',
                        iconName: ''
                    },
                    {
                        id: 100202,
                        title: '用户管理',
                        iconName: ''
                    },
                    {
                        id: 100203,
                        title: '职位管理',
                        iconName: ''
                    }
                ]
            },
            {   
                id: 1003, 
                title: '系统运维', 
                children:[
                    {
                        id: 100301,
                        title: '日志审计',
                        children: [
                            {
                                id: 10030101,
                                title: '访问日志'
                            },
                            {
                                id: 10030102,
                                title: '操作日志'
                            }
                        ]
                    }
                ]
            }
        ],
        collapsed: false,
      };
    },
    methods: {
      combineMenu(menuList=[]) {
        let menuLabel = ''
        menuList.forEach((item)=>{
          if(item.children) {
            this.combineMenu(item.children)
          }else {
            this.menuItem(item)
          }
        })
      },
      menuItem(item) {
        return item.iconName ? 
          (<a-menu-item :key="item.id">
            <a-icon :type="item.iconName" />
            <span>{{item.title}}</span>
          </a-menu-item>)
        : 
          (<a-menu-item :key="item.id">
              {{item.title}}
          </a-menu-item>)
      },
      subMenu() {

      }
    }
  };
  </script>
  