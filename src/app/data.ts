export class Item {
    public id: number;
    public title: string;
    public children: any[]; /**ChildItem[] */
}

export interface ChildItem {
    id: number;
    title: string;
    children: any[];
}
export const data: any = [
    {
        "id": 1,
        "title": "element1",
        "children": [
            {
                "id": 10,
                "title": "element5",
                "children": []
            }
        ]
    },

    {
        "id": 2,
        "title":"element2",
        "children": [
            {
                "id": 11,
                "title": "element6",
                "children": []
            }
        ]
    },

    {
        "id": 3,
        "title": "element3",
        "children": [
            {
                "id": 12,
                "title": "element7",
                "children": [
                    {
                        "id": 14,
                        "title": "element9",
                        "children": [
                            {
                                "id": 15,
                                "title": "element10",
                                "children": [
                                    {
                                        "id": 17,
                                        "title": "element11",
                                        "children": []
                                    },
                                    {
                                        "id": 18,
                                        "title": "element12",
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
                "title": "element8",
                "children": []
            }
        ]
    },
    {
        "id": 4,
        "title": "element4",
        "children": []
    }
];
