export interface Technology {
    name: string;
    img: string;
}

export interface Project {
    name: string;
    techStack: string[];
    id: number;
    description: string;
    links?: string;
    img?: string;
    detail: {
        title: string;
        description: string;
        links: string;
        videoLink?: string;
    }[];
}

