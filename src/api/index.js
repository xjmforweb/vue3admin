import request from '../utils/request'

export const fetchData = (query) => request({
  url: './table.json',
  method: 'get',
  params: query,
})
