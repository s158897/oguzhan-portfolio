export interface Profile {
    name: string;
    education: string;
    company: string;
    location: string;
    role: string;
    linkedin: string;
    github: string;
    photo: string;
}
export interface BlogPost {
    slug: string;
    number: string;
    category: string;
    tags: string[];
    title: string;
    excerpt: string;
    time: string;
    color: string;
    photos?: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    codeBlocks?: {
        title: string;
        language: string;
        code: string;
        explanation?: string;
    }[];
    sections: [
        string,
        string
    ][];
}
