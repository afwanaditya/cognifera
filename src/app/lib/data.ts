export interface book{
    id: number;
    title: string;
    author: string;
    status: "pending" | "published" | "rejected";
}

export const initialBooks: book[] = [
    {
        id: 1,
        title: "Filosofi kopi modern",
        author: "dee lestari (member)",
        status: "published",
    },

    {
        id: 2,
        title: "cara belajar next.js",
        author: "budi hacker",
        status: "pending",
    },
];