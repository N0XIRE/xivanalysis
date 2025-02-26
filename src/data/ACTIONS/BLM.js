import STATUSES from 'data/STATUSES'

export default {
	BLIZZARD_I: {
		id: 142,
		name: 'Blizzard',
		icon: 'https://xivapi.com/i/000000/000454.png',
		onGcd: true,
		castTime: 2.5,
	},
	BLIZZARD_II: {
		id: 146,
		name: 'Blizzard II',
		icon: 'https://xivapi.com/i/000000/000455.png',
		onGcd: true,
		castTime: 2.0,
	},
	BLIZZARD_III: {
		id: 154,
		name: 'Blizzard III',
		icon: 'https://xivapi.com/i/000000/000456.png',
		onGcd: true,
		castTime: 3.5,
	},
	BLIZZARD_IV: {
		id: 3576,
		name: 'Blizzard IV',
		icon: 'https://xivapi.com/i/002000/002659.png',
		onGcd: true,
		castTime: 2.8,
	},
	FREEZE: {
		id: 159,
		name: 'Freeze',
		icon: 'https://xivapi.com/i/002000/002653.png',
		onGcd: true,
		castTime: 3.0,
	},
	UMBRAL_SOUL: {
		id: 16506,
		name: 'Umbral Soul',
		icon: 'https://xivapi.com/i/002000/002666.png',
		onGcd: true,
	},
	FIRE_I: {
		id: 141,
		name: 'Fire',
		icon: 'https://xivapi.com/i/000000/000451.png',
		onGcd: true,
		castTime: 2.5,
	},
	FIRE_II: {
		id: 147,
		name: 'Fire II',
		icon: 'https://xivapi.com/i/000000/000452.png',
		onGcd: true,
		castTime: 3.0,
	},
	FIRE_III: {
		id: 152,
		name: 'Fire III',
		icon: 'https://xivapi.com/i/000000/000453.png',
		onGcd: true,
		castTime: 3.5,
	},
	FIRE_IV: {
		id: 3577,
		name: 'Fire IV',
		icon: 'https://xivapi.com/i/002000/002660.png',
		onGcd: true,
		castTime: 2.8,
	},
	FLARE: {
		id: 162,
		name: 'Flare',
		icon: 'https://xivapi.com/i/002000/002652.png',
		onGcd: true,
		castTime: 4.0,
	},
	DESPAIR: {
		id: 16505,
		name: 'Despair',
		icon: 'https://xivapi.com/i/002000/002665.png',
		onGcd: true,
		castTime: 3.0,
	},
	THUNDER: {
		id: 144,
		name: 'Thunder',
		icon: 'https://xivapi.com/i/000000/000457.png',
		onGcd: true,
		castTime: 2.5,
	},
	THUNDER_II: {
		id: 7447,
		name: 'Thunder II',
		icon: 'https://xivapi.com/i/000000/000468.png',
		onGcd: true,
		castTime: 3.0,
	},
	THUNDER_III: {
		id: 153,
		name: 'Thunder III',
		icon: 'https://xivapi.com/i/000000/000459.png',
		onGcd: true,
		castTime: 2.5,
	},
	THUNDER_IV: {
		id: 7420,
		name: 'Thunder IV',
		icon: 'https://xivapi.com/i/002000/002662.png',
		onGcd: true,
		castTime: 3.0,
	},
	SCATHE: {
		id: 156,
		name: 'Scathe',
		icon: 'https://xivapi.com/i/000000/000462.png',
		onGcd: true,
	},
	FOUL: {
		id: 7422,
		name: 'Foul',
		icon: 'https://xivapi.com/i/002000/002664.png',
		onGcd: true,
		castTime: 2.5,
	},
	XENOGLOSSY: {
		id: 16507,
		name: 'Xenoglossy',
		icon: 'https://xivapi.com/i/002000/002667.png',
		onGcd: true,
	},
	SLEEP: {
		id: 145,
		name: 'Sleep',
		icon: 'https://xivapi.com/i/000000/000465.png',
		onGcd: true,
		castTime: 2.5,
	},
	TRANSPOSE: {
		id: 149,
		name: 'Transpose',
		icon: 'https://xivapi.com/i/000000/000466.png',
		cooldown: 8,
	},
	MANAFONT: {
		id: 158,
		name: 'Manafont',
		icon: 'https://xivapi.com/i/002000/002651.png',
		cooldown: 180,
	},
	MANAWARD: {
		id: 157,
		name: 'Manaward',
		icon: 'https://xivapi.com/i/000000/000463.png',
		cooldown: 120,
	},
	AETHERIAL_MANIPULATION: {
		id: 155,
		name: 'Aetherial Manipulation',
		icon: 'https://xivapi.com/i/000000/000467.png',
		cooldown: 10,
	},
	LEY_LINES: {
		id: 3573,
		name: 'Ley Lines',
		icon: 'https://xivapi.com/i/002000/002656.png',
		cooldown: 90,
		statusesApplied: [STATUSES.LEY_LINES],
	},
	SHARPCAST: {
		id: 3574,
		name: 'Sharpcast',
		icon: 'https://xivapi.com/i/002000/002657.png',
		cooldown: 30,
		statusesApplied: [STATUSES.SHARPCAST],
	},
	ENOCHIAN: {
		id: 3575,
		name: 'Enochian',
		icon: 'https://xivapi.com/i/002000/002658.png',
		cooldown: 30,
	},
	BETWEEN_THE_LINES: {
		id: 7419,
		name: 'Between the Lines',
		icon: 'https://xivapi.com/i/002000/002661.png',
		cooldown: 3,
	},
	TRIPLECAST: {
		id: 7421,
		name: 'Triplecast',
		icon: 'https://xivapi.com/i/002000/002663.png',
		cooldown: 60,
		statusesApplied: [STATUSES.TRIPLECAST],
	},
	FIRE_III_PROC: {
		id: '152PROC',
		name: 'Fire III',
		icon: process.env.PUBLIC_URL + '/icon/action/f3p.png',
		onGcd: true,
	},
	THUNDER_III_PROC: {
		id: '153PROC',
		name: 'Thunder III',
		icon: process.env.PUBLIC_URL + '/icon/action/t3p.png',
		onGcd: true,
	},
	THUNDER_III_FALSE: {
		id: '153FALSE',
		name: 'Thunder III',
		icon: process.env.PUBLIC_URL + '/icon/action/t3f.png',
		onGcd: true,
	},
	THUNDER_IV_PROC: {
		id: '742PROC',
		name: 'Thunder IV',
		icon: process.env.PUBLIC_URL + '/icon/action/t4p.png',
		onGcd: true,
	},
}
