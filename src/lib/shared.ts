export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

declare global {
    type Classes<T extends string> = Partial<ClassNameMap<T>>;
    type SvgComponent = typeof import('*.svg').ReactComponent;

    namespace FeipApi {
        type Slug = { slug: string };

        // NOTE: Two different types of pagination payload!
        type ListPayload = { page?: number; per_page?: number };
        type ListPayloadAlt = { page?: number; page_size: number };
        type PagePayload = { page?: number };

        type SortingMode = 'popularity' | 'price' | 'rating';

        type Enum<T extends string> = { id: T; name: string };
        type ListResult<T> = { items: T[] };
        type Paginate = { total: number; page_size: number; page: number };
        type PaginateList<T> = Paginate & ListResult<T>;
    }
}

export {};
