interface ChildItemInterface {
    id: number;
    title: string;
    children: ChildItemInterface[];
}

export class Item implements ChildItemInterface {

    constructor (
        public id: number,
        public title: string,
        public children: Item[]
    ) {}
}

export const data: Item[] = [
    {
        "id": 1,
        "title": "element 1",
        "children": [
            {
                "id": 10,
                "title": "element 5",
                "children": []
            }
        ]
    },

    {
        "id": 2,
        "title":"element 2",
        "children": [
            {
                "id": 11,
                "title": "element 6",
                "children": []
            }
        ]
    },

    {
        "id": 3,
        "title": "element 3",
        "children": [
            {
                "id": 12,
                "title": "element 7",
                "children": [
                    {
                        "id": 14,
                        "title": "element 9",
                        "children": [
                            {
                                "id": 15,
                                "title": "element 10",
                                "children": [
                                    {
                                        "id": 17,
                                        "title": "element 11",
                                        "children": []
                                    },
                                    {
                                        "id": 18,
                                        "title": "element 12",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": 13,
                "title": "element 8",
                "children": []
            }
        ]
    },
    {
        "id": 4,
        "title": "element 4",
        "children": []
    }
];
