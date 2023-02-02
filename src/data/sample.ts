export const mods: Mod[] = [
    {
        "type": "rifle",
        "mode": "relative",
        "name": "Point Strike",
        "stats": [25, 50, 75, 100, 125, 150],
        "multiplier": 1.5,
        "state": {
            "selected": false,
            "condition": [{
                state: false,
                description: null
            }]
        },
        "groupId": null
    },
    {
        "type": "rifle",
        "mode": "relative",
        "name": "Critical Delay",
        "stats": [33.3, 66.7, 100, 133.3, 166.7, 200],
        "multiplier": 2,
        "state": {
            "selected": false,
            "condition": [{
                state: false,
                description: null
            }]
        },
        "groupId": null
    },
    {
        "type": "rifle",
        "mode": "relative",
        "name": "Argon Scope",
        "stats": [22.5, 45, 67.5, 90, 112.5, 135],
        "multiplier": 1.35,
        "state": {
            "selected": false,
            "condition": [{
                state: false,
                description: "On Headshot gain Critical Strike"
            }]
        },
        "groupId": "scope"
    },
    {
        "type": "buff",
        "mode": "absolute",
        "name": "Cat's Eye",
        "stats": [15, 30, 45, 60],
        "multiplier": 0.6,
        "state": {
            "selected": false,
            "condition": [{
                state: false,
                description: null
            }]
        },
        "groupId": null
    }
];

interface Mod {
    type: WeaponType;
    mode: 'relative' | 'absolute';
    name: string;
    stats: number[];
    multiplier: number;
    state: ModState;
    groupId: String;
}

interface ModState {
    selected: boolean;
    condition: ConditionState[];
}

interface ConditionState {
    state: boolean;
    description: string | null;
  }

export const weaponTypes: WeaponType[] = ["rifle", "shotgun", "pistol", "melee", "buff"]

type WeaponType = "rifle" | "shotgun" | "pistol" | "melee" | "buff" | "companion";  