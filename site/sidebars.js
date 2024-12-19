/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	docsSidebar: [
		{
			type: "category",
			label: "Getting Started",
			collapsed: false,
			items: [
				{ type: "doc", id: "introduction" },
				{ type: "doc", id: "installation" },
				{ type: "doc", id: "configuration" },
				{ type: "doc", id: "slicers" },
			],
		},
		{
			type: "category",
			label: "Configuration",
			collapsed: false,
			items: [{ type: "autogenerated", dirName: "configuration" }],
		},
		{
			type: "category",
			label: "Guides",
			collapsed: false,
			items: [
				{ type: "autogenerated", dirName: "guides" },
				{
					type: "link",
					href: "/changelog#updating-from-ratos-v1",
					label: "Updating from RatOS V1.x",
				},
			],
		},
		{
			type: "category",
			label: "Supported Boards",
			collapsed: true,
			items: [{ type: "autogenerated", dirName: "boards" }],
			link: {
				type: "doc",
				id: "boards/list",
			},
		},
		{
			type: "category",
			label: "Supported Toolboards",
			collapsed: true,
			items: [{ type: "autogenerated", dirName: "toolboards" }],
			link: {
				type: "doc",
				id: "toolboards/list",
			},
		},
		{
			type: "category",
			label: "Supported Printers",
			collapsed: true,
			items: [{ type: "autogenerated", dirName: "printers" }],
			link: {
				type: "doc",
				id: "printers/list",
			},
		},
		{ type: "doc", id: "troubleshooting" },
		{ type: "doc", id: "manual-firmware-compilation" },
		{
			type: "category",
			label: "Other Documentation",
			collapsed: false,
			items: [
				{
					type: "link",
					label: "Klipper",
					href: "https://www.klipper3d.org/",
				},
				{
					type: "link",
					label: "Mainsail",
					href: "https://docs.mainsail.xyz/",
				},
				{
					type: "link",
					label: "Moonraker",
					href: "https://moonraker.readthedocs.io/en/latest/",
				},
				{
					type: "link",
					label: "KlipperScreen",
					href: "https://klipperscreen.readthedocs.io/",
				},
			],
		},
	],

	// But you can create a sidebar manually
	// tutorialSidebar: [
	//   {
	//     type: 'category',
	//     label: 'Installation',
	//     items: ['installation'],
	//   },
	// ],
};

module.exports = sidebars;
