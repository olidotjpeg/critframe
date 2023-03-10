export const mods: Mod[] = [
	{
		type: 'rifle',
		mode: 'relative',
		name: 'Point Strike',
		stats: [25, 50, 75, 100, 125, 150],
		multiplier: 1.5,
		state: {
			selected: false,
			condition: [],
		},
		groupId: null,
	},
	{
		type: 'rifle',
		mode: 'relative',
		name: 'Critical Delay',
		stats: [33.3, 66.7, 100, 133.3, 166.7, 200],
		multiplier: 2,
		state: {
			selected: false,
			condition: [],
		},
		groupId: null,
	},
	{
		type: 'rifle',
		mode: 'relative',
		name: 'Argon Scope',
		stats: [22.5, 45, 67.5, 90, 112.5, 135],
		state: {
			selected: false,
			condition: [
				{
					state: false,
					multiplier: 1.35,
					description: 'On Headshot gain Critical Strike',
				},
			],
		},
		groupId: 'scope',
	},
	{
		type: 'rifle',
		mode: 'relative',
		name: 'Galvanized Scope',
		stats: [],
		minMultiplier: 1.2,
		maxMultiplier: 3.2,
		state: {
			selected: false,
			condition: [
				{
					state: false,
					multiplier: 1.2,
					description: 'On Headshot gain Critical Strike',
				},
				{
					state: false,
					multiplier: 2,
					description: 'On Headshot kill gain Critical Strike',
				},
			],
		},
		groupId: 'scope',
	},
	{
		type: 'rifle',
		mode: 'relative',
		name: 'Proton Jet',
		stats: [],
		state: {
			selected: false,
			condition: [
				{
					state: false,
					multiplier: 1.2,
					description: 'On Wall Latch gain Critical',
				},
			],
		},
		groupId: null,
	},
	{
		type: 'shotgun',
		mode: 'relative',
		name: 'Blunderbuss',
		stats: [],
		multiplier: 0.9,
		state: {
			selected: false,
			condition: [],
		},
		groupId: null,
	},
	{
		type: 'shotgun',
		mode: 'relative',
		name: 'Critical Deceleration',
		stats: [],
		multiplier: 2,
		state: {
			selected: false,
			condition: [],
		},
		groupId: null,
	},
	{
		type: 'shotgun',
		mode: 'relative',
		name: 'Laser Sight',
		stats: [],
		state: {
			selected: false,
			condition: [
				{
					state: false,
					description: 'On Headshot gain Critical Strike',
					multiplier: 1.2,
				},
			],
		},
		groupId: null,
	},
	{
		type: 'shotgun',
		mode: 'relative',
		name: 'Motus Setup',
		stats: [],
		state: {
			selected: false,
			condition: [
				{
					state: false,
					description: 'On Bullet or Double Jump gain Crit',
					multiplier: 1,
				},
			],
		},
		groupId: null,
	},
	{
		type: 'pistol',
		mode: 'relative',
		name: 'Pistol Gambit',
		stats: [],
		multiplier: 1.2,
		state: {
			selected: false,
			condition: [],
		},
		groupId: 'gambit',
	},
	{
		type: 'pistol',
		mode: 'relative',
		name: 'Pistol Gambit',
		stats: [],
		multiplier: 1.87,
		state: {
			selected: false,
			condition: [],
		},
		groupId: 'gambit',
	},
	{
		type: 'pistol',
		mode: 'relative',
		name: 'Creeping Bullseye',
		stats: [],
		multiplier: 2,
		state: {
			selected: false,
			condition: [],
		},
		groupId: null,
	},
	{
		type: 'pistol',
		mode: 'relative',
		name: 'Hydraulic Crosshairs',
		stats: [],
		state: {
			selected: false,
			condition: [
				{
					state: false,
					description: 'On headshot when aiming gain Critical Hit',
					multiplier: 1.35,
				},
			],
		},
		groupId: 'crosshairs',
	},
	{
		type: 'pistol',
		mode: 'relative',
		name: 'Galvanized Crosshair',
		stats: [],
		state: {
			selected: false,
			condition: [
				{
					state: false,
					description: 'On headshot when aiming gain Critical Hit',
					multiplier: 1.2,
				},
				{
					state: false,
					description: 'On headshot kills when aiming gain Critical Hit',
					multiplier: 0.4,
				},
			],
		},
		groupId: 'crosshairs',
	},
	{
		type: 'melee',
		mode: 'relative',
		name: 'True Steel',
		stats: [],
		multiplier: 1.2,
		state: {
			selected: false,
			condition: [],
		},
		groupId: 'steel',
	},
	{
		type: 'melee',
		mode: 'relative',
		name: 'Maiming Strike',
		stats: [],
		multiplier: 1.5,
		state: {
			selected: false,
			condition: [],
		},
		groupId: null,
	},
	{
		type: 'melee',
		mode: 'relative',
		name: 'Sacrificial Steel',
		stats: [],
		multiplier: 2.2,
		state: {
			selected: false,
			condition: [],
		},
		groupId: 'steel',
	},
	{
		type: 'melee',
		mode: 'relative',
		name: 'Mark of the Beast',
		stats: [],

		state: {
			selected: false,
			condition: [
				{
					multiplier: 1.2,
					state: false,
					description: 'On 6 melee kills with 6 seconds gain Critical Hit',
				},
			],
		},
		groupId: null,
	},
];

export const buffs: Mod[] = [
	{
		type: 'buff',
		mode: 'absolute',
		name: "Cat's Eye",
		stats: [15, 30, 45, 60],
		multiplier: 0.6,
		state: {
			selected: false,
			condition: [],
		},
		groupId: null,
	},
];

export interface Mod {
	type: WeaponType;
	mode: 'relative' | 'absolute';
	name: string;
	stats: number[];
	multiplier?: number;
	minMultiplier?: number;
	maxMultiplier?: number;
	state: ModState;
	groupId: string;
}

export interface ModState {
	selected: boolean;
	condition: ConditionState[];
}

export interface ConditionState {
	state: boolean;
	description: string | null;
	multiplier: number;
}

export const weaponTypes: WeaponType[] = [
	'rifle',
	'shotgun',
	'pistol',
	'melee',
	'buff',
];

export type WeaponType =
	| 'rifle'
	| 'shotgun'
	| 'pistol'
	| 'melee'
	| 'buff'
	| 'companion';
