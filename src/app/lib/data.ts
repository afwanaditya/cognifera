export interface book{
    id: number;
    title: string;
    author: string;
    status: "Pending" | "Published" | "Rejected";
}

export const initialBooks: book[] = [
    {
        id: 1,
        title: "Filosofi kopi modern",
        author: "dee lestari (member)",
        status: "Published",
    },

    {
        id: 2,
        title: "cara belajar next.js",
        author: "budi hacker",
        status: "Pending",
    },
];