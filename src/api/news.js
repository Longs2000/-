// 所有关于新闻的接口

import request from '@/utils/request'

/**
 *
 * @param {S} id
 * @param {*} timestamp
 * @returns
 */
export const getArticles = (id, timestamp) => {
  return request({
    url: '/v1_0/articles',
    params: {
      channel_id: id,
      timestamp
    }
  })
}
