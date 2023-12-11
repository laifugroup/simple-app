import internal from "stream"


type BasicRsp = {
    code: number
    message: string
}

type Rsp<T> = BasicRsp & {
    data: T;
}

type RspList<T> = BasicRsp & {
    data: T[];
}

//分页对象
type RspPage<T> = BasicRsp & {
    data: Pagination<T>
}

//分页
type Pagination<T> = {
    current: number
    total: number
    size: number
    records: T[]
}


