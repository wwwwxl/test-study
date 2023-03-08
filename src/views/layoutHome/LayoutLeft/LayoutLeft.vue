<!-- <template>
    <div class="menuBox">
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

        <a-sub-menu key="2">
          <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
          <a-menu-item key="2">
            Option 2
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="3">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
          <a-menu-item key="31">
            Option 31
          </a-menu-item>
          <a-sub-menu key="32" title="Option 32">
            <a-menu-item key="321">
              Option 321
            </a-menu-item>
            <a-menu-item key="322">
              Option 322
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>

      </a-menu>
    </div>
  </template> -->

<script>
export default {
	data() {
		return {
			menuList: [
				{
					id: 1001,
					title: '系统首页',
					iconName: 'pie-chart',
					name: 'system',
					path: '/system',
				},
				{
					id: 1002,
					title: '组织架构',
					iconName: 'pie-chart',
					children: [
						{
							id: 100201,
							title: '组织管理',
							iconName: '',
							name: 'systemOrg',
							path: '/system/org',
						},
						{
							id: 100202,
							title: '用户管理',
							iconName: '',
							name: 'systemUser',
							path: '/system/user',
						},
						{
							id: 100203,
							title: '职位管理',
							iconName: '',
							name: 'systemPosition',
							path: '/system/position',
						},
					],
				},
				{
					id: 1003,
					title: '系统运维',
					iconName: 'pie-chart',
					children: [
						{
							id: 100301,
							title: '日志审计',
							iconName: 'unordered-list',
							children: [
								{
									id: 10030101,
									title: '访问日志',
									name: 'devLogLoginLog',
									path: '/dev/log/loginLog',
								},
								{
									id: 10030102,
									title: '操作日志',
									name: 'devLogOperaLog',
									path: '/dev/log/operaLog',
								},
							],
						},
						{
							id: 100302,
							title: '代码生成',
							iconName: 'unordered-list',
							name: 'devGenCode',
							path: '/dev/genCode',
						},
					],
				},
				{
					id: 1004,
					title: '学习练习',
					iconName: 'pie-chart',
					children: [
						{
							id: 100400,
							title: '表单',
							iconName: 'unordered-list',
							name: 'practiseFormUse',
							path: '/practise/formUse',
						},
						{
							id: 100401,
							title: '描点跳转',
							iconName: 'unordered-list',
							name: 'practiseTracingPoint',
							path: '/practise/tracingPoint',
						},
						{
							id: 100402,
							title: '混合mixins',
							iconName: 'unordered-list',
							name: 'practiseMixFun',
							path: '/practise/mixFun',
						},
					],
				},
				{
					id: 1005,
					title: '状态提示',
					iconName: 'pie-chart',
					children: [
						{
							id: 100501,
							title: '403',
							iconName: 'unordered-list',
							name: '403',
							path: '/403',
						},
						{
							id: 100502,
							title: '404',
							iconName: 'unordered-list',
							name: '404',
							path: '/404',
						},
						{
							id: 100503,
							title: '500',
							iconName: 'unordered-list',
							name: '500',
							path: '/500',
						}
					],
				}
			],
			collapsed: false,
		}
	},
	methods: {
		menuItemClick(event) {
			// console.log('event', event)
			let {
				name,path
			} = event.item.$el.dataset
			console.log('name=', name)
			this.$router.push({
				name: name
			})
		},
		// 生成菜单判断
		combineMenu(menuList = this.menuList) {
			let needMenuList = []
			menuList.map((item) => {
				if (item.children) {
					needMenuList.push(this.subMenu(item))
				} else {
					needMenuList.push(this.menuItem(item))
				}
			})
			return needMenuList
		},
		// 生成一级菜单
		menuItem(item) {
			return item.iconName ? (
				<a-menu-item
					key={item.id}
					onClick={this.menuItemClick}
					data-name={item.name}
					data-path={item.path}
				>
					<a-icon type={item.iconName} />
					<span>{item.title}</span>
				</a-menu-item>
			) : (
				<a-menu-item key={item.id} data-name={item.name}
					data-path={item.path} onClick={this.menuItemClick}>
					{item.title}
				</a-menu-item>
			)
		},
		// 生成二级菜单
		subMenu(item) {
			return item.iconName ? (
				<a-sub-menu key={item.id}>
					<span slot="title">
						<a-icon type={item.iconName} />
						<span>{item.title}</span>
					</span>
					{this.toUseMenuItem(item.children)}
				</a-sub-menu>
			) : (
				<a-sub-menu key={item.id}>
					<span slot="title">
						<span>{item.title}</span>
					</span>
					{this.toUseMenuItem(item.children)}
				</a-sub-menu>
			)
		},
		// 形成二级menuItem
		toUseMenuItem(list = []) {
			let forList = []
			list.map((item) => {
				if (item.children) {
					forList.push(this.combineMenu([item]))
				} else {
					forList.push(this.menuItem(item))
				}
			})
			return forList
		},
	},
	render: function (h) {
		let defSelectedKeys = ['1']
		let defOpenKeys = ['sub1']
		const menuList = (
			<a-menu
				default-selected-keys={defSelectedKeys}
				default-open-keys={defOpenKeys}
				mode="inline"
				theme="dark"
				inline-collapsed={this.collapsed}
			>
				{this.combineMenu()}
			</a-menu>
		)
		return (
			<div class="menuBox">
				<div class="head-box">
					<div class="flex-row">
						<a-icon class="icon-lab" type="dribbble" />
						<span class="span-lab">test-study</span>
					</div>
				</div>
				{menuList}
			</div>
		)
	},
}
</script>
<style scoped lang="scss">
.head-box {
	width: 100%;
	height: 7rem;
	padding-left: 10%;
	padding-right: 20%;
	box-sizing: border-box;
	color: #fff;
	font-weight: bold;
	background: #001529;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	.flex-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		.icon-lab {
			font-size: 3rem;
			padding: 0.2rem;
			box-sizing: border-box;
		}
		.span-lab {
			font-size: 1.8rem;
		}
	}
}
.menuBox {
	width: 100%;
	height: 100%;
	--scroll-bar: 0;
	overflow: auto;
	> ul {
		width: 100%;
		height: calc(100% - 7rem);
	}
}

.menuBox::-webkit-scrollbar {
	display: none;
}
</style>
