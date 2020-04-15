export const MARKETSETUPS = {
    setups: {
        market1Inc: {
            id: 'market1Inc',
            name: 'Market Setup 1 (inclusive)',
            type: 'custom',
            active: true,
            tiles: [
                { type: 'Gem', operation: '<', threshold: 4 },
                { type: 'Gem', operation: '=', threshold: 4 },
                { type: 'Gem', operation: 'ANY' },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: '<=', threshold: 5 },
                { type: 'Spell', operation: '<=', threshold: 5 },
                { type: 'Spell', operation: '>=', threshold: 5 },
                { type: 'Spell', operation: '>=', threshold: 5 },
            ],
        },
        market1: {
            id: 'market1',
            name: 'Market Setup 1',
            type: 'official',
            active: true,
            tiles: [
                { type: 'Gem', operation: '<', threshold: 4 },
                { type: 'Gem', operation: '=', threshold: 4 },
                { type: 'Gem', operation: 'ANY' },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: '<', threshold: 5 },
                { type: 'Spell', operation: '<', threshold: 5 },
                { type: 'Spell', operation: '>', threshold: 5 },
                { type: 'Spell', operation: '>', threshold: 5 },
            ],
        },
        market2: {
            id: 'market2',
            name: 'Market Setup 2',
            type: 'official',
            active: true,
            tiles: [
                { type: 'Gem', operation: '<', threshold: 3 },
                { type: 'Gem', operation: '>', threshold: 3 },
                { type: 'Gem', operation: '>', threshold: 3 },
                { type: 'Relic', operation: '>', threshold: 4 },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: '<', threshold: 6 },
                { type: 'Spell', operation: '<', threshold: 6 },
                { type: 'Spell', operation: '<', threshold: 6 },
                { type: 'Spell', operation: '>', threshold: 6 },
            ],
        },
        market3: {
            id: 'market3',
            name: 'Market Setup 3',
            type: 'official',
            active: true,
            tiles: [
                { type: 'Gem', operation: '<', threshold: 4 },
                { type: 'Gem', operation: 'OR', values: [4, 5] },
                { type: 'Gem', operation: 'OR', values: [4, 5] },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: '=', threshold: 3 },
                { type: 'Spell', operation: '=', threshold: 4 },
                { type: 'Spell', operation: '>', threshold: 5 },
                { type: 'Spell', operation: '>', threshold: 5 },
                { type: 'Spell', operation: '>', threshold: 5 },
            ],
        },
        market4: {
            id: 'market4',
            name: 'Market Setup 4',
            type: 'official',
            active: true,
            tiles: [
                { type: 'Gem', operation: '>', threshold: 4 },
                { type: 'Gem', operation: 'ANY' },
                { type: 'Gem', operation: 'ANY' },
                { type: 'Relic', operation: '<', threshold: 4 },
                { type: 'Relic', operation: '>', threshold: 4 },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: '<', threshold: 5 },
                { type: 'Spell', operation: '>', threshold: 5 },
                { type: 'Spell', operation: 'ANY' },
            ],
        },
        market5: {
            id: 'market5',
            name: 'Market Setup 5',
            type: 'official',
            active: true,
            tiles: [
                { type: 'Gem', operation: '=', threshold: 2 },
                { type: 'Gem', operation: '=', threshold: 3 },
                { type: 'Gem', operation: '=', threshold: 4 },
                { type: 'Gem', operation: '=', threshold: 5 },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: '=', threshold: 4 },
                { type: 'Spell', operation: '=', threshold: 5 },
                { type: 'Spell', operation: '=', threshold: 6 },
                { type: 'Spell', operation: '>', threshold: 6 },
            ],
        },
        market6: {
            id: 'market6',
            name: 'Market Setup 6',
            type: 'official',
            active: true,
            tiles: [
                { type: 'Gem', operation: '=', threshold: 3 },
                { type: 'Gem', operation: '=', threshold: 4 },
                { type: 'Relic', operation: '<', threshold: 4 },
                { type: 'Relic', operation: '>', threshold: 4 },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: 'OR', values: [3, 4] },
                { type: 'Spell', operation: 'OR', values: [5, 6] },
                { type: 'Spell', operation: 'OR', values: [5, 6] },
                { type: 'Spell', operation: '>', threshold: 6 },
            ],
        },
        random: {
            id: 'random',
            name: 'Random Setup (Default)',
            type: 'official',
            default: true,
            active: true,
            tiles: [
                { type: 'Gem', operation: 'ANY' },
                { type: 'Gem', operation: 'ANY' },
                { type: 'Gem', operation: 'ANY' },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Relic', operation: 'ANY' },
                { type: 'Spell', operation: 'ANY' },
                { type: 'Spell', operation: 'ANY' },
                { type: 'Spell', operation: 'ANY' },
                { type: 'Spell', operation: 'ANY' },
            ],
        },
    },
    ids: [
        'market1Inc',
        'market1',
        'market2',
        'market3',
        'market4',
        'market5',
        'market6',
        'random',
    ],
};