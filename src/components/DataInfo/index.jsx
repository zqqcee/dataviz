import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import "./index.css"
import { Button, Popover } from 'antd';

//FIXME: 更加详细的数据说明
export default function DataInfo() {

    const highlightNodeNum = useSelector(state => state.dataInfo.highlightNodeNum)
    const highlightLinkNum = useSelector(state => state.dataInfo.highlightLinkNum)

    const detailInfo = useSelector(state => state.dataInfo.detailInfo)
    const nodesInfo = Object.entries(detailInfo.nodes)
    let nodesContent
    if (!nodesInfo.length) {
        nodesContent = (<p key={1} className='nodataInfo'>您似乎还未选择想要查看的节点</p>)
    } else {
        nodesContent = (
            <div className='tooltip nodetooltip'>
                {
                    nodesInfo.map(([key, value]) => {
                        if (key === 'alarmingCnt') {
                            return (<p key={key} className='alarmingInfo'>{`告警数量 : ${value}`}</p>)
                        }
                        return (<p key={key} className='commonInfo'>{`${key}数量 : ${value}`}</p>)
                    })
                }
            </div>
        )
    }

    const linksInfo = Object.entries(detailInfo.links)
    let linksContent
    if (!linksInfo.length) {
        linksContent = (<p key={2} className='nodataInfo'>您似乎还未选择想要查看的连边</p>)
    } else {
        linksContent = (
            <div className='tooltip'>
                {
                    linksInfo.map(([key, value]) => {
                        if (key === 'alarmingCnt') {
                            return (<p key={key} className='alarmingInfo'>{`告警数量 : ${value}`}</p>)
                        }
                        return (<p key={key} className='commonInfo'>{`${key}数量 : ${value}`}</p>)
                    })
                }
            </div>
        )
    }

    const areaInfo = Object.entries(detailInfo.area)

    let areaContent
    if (!areaInfo.length) {
        areaContent = (<p key={3} className='nodataInfo'>您似乎还未选择想要查看的区域</p>)
    } else {
        areaContent = (
            <div className='tooltip'>
                {
                    areaInfo.map(([key, value]) => {
                        if (key.split('_').length === 1) {
                            //可用区
                            return (
                                <Fragment>
                                    <hr key={`hr1${key}`} />
                                    <p key={key} className='azInfo'>{`${key}设备数量: ${value}`}</p>
                                    <hr key={`hr2${key}`} />
                                </Fragment>
                            )
                        }
                        return (<p key={key} className='podInfo'>{`${key.split('_')[1]}  设备数量 : ${value}`}</p>)
                    })
                }
            </div>)
    }



    return (
        <div className='datainfo'>
            <div className="title">数据信息</div>
            <div className="info">
              <div className="commonInfo">
              高亮节点:<span className={highlightNodeNum === 0 ? null : 'highlighttext'}>{highlightNodeNum} </span><br />
              高亮连边:<span className={highlightLinkNum === 0 ? null : 'highlighttext'}>{highlightLinkNum}</span><br />
              </div>

              <div className='highlightinfo'>
                  <Popover content={nodesContent} title="节点角色与告警详情" trigger="hover" placement='bottomLeft'>
                      <Button className='btn' style={{ display: highlightNodeNum !== 0 ? 'block' : 'none' }}>角色详情</Button>
                  </Popover><br />

                  <Popover content={areaContent} title="区域信息详情" trigger="hover" placement='bottomLeft'>
                      <Button className='btn' style={{ display: highlightNodeNum !== 0 ? 'block' : 'none' }}>区域详情</Button>
                  </Popover><br />

                  <Popover content={linksContent} title="连边种类与告警详情" trigger="hover" placement='bottomLeft'>
                      <Button className='btn' style={{ display: highlightLinkNum !== 0 ? 'block' : 'none' }}>连边详情</Button>
                  </Popover><br />
              </div>
            </div>
        </div >
    )
}
