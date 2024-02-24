export interface Rule{
    description: string;
    validate: (password: string) => boolean;
}
