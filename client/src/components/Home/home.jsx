import React from 'react'

import arrow from '../../img/arrow.png'
import Banner from '../../img/banners.png'
import Choosing from '../../img/choosing.png'
import Custom from '../../img/custom.png'
import Marketing from '../../img/marketing.png'
import Task from '../../img/task.png'


function Home({ chart }) {

  const titleChart = chart.title
  console.log('titleChart', titleChart)
  const banners = chart.sub[0]
  console.log('banners', banners)
  const choosing = banners.sub[0]
  console.log('choosing', choosing)
  const custom = choosing.sub[0]
  console.log('custom', custom)
  const custom_ussue = custom.sub[0]
  console.log('custom_ussue', custom_ussue)
  const custom_task = custom.sub[1]
  console.log('custom_task', custom_task)

  const arrayMouht = ['01 Sep - 07 Sep', '08 Sep - 14 Sep', '15 Sep - 21 Sep', '22 Sep - 28 Sep', '29 Sep - 4 Oct', '5 Oct - 11 Oct', '12 Oct - 18 Oct']
  const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__content-left-saidbar">
            <div className="home__content-left-saidbar-title">
              <span className="home__content-left-saidbar-title-text">Work item</span>
            </div>
            <div className="home__content-left-saidbar-item saidbar-item">
              <div className="saidbar-item__task">
              </div>
            </div>
            <div className="home__content-left-saidbar-item saidbar-item">
              <div className="saidbar-item__marketing">
                <img src={arrow} alt="arrow" />
                <img src={Marketing} alt="Marketing" />
                <span>3</span>
                <span className="saidbar-item__marketing-title">{chart.title}</span>
              </div>
            </div>
            <div className="home__content-left-saidbar-item saidbar-item">
              <div className="saidbar-item__banners">
                <img src={arrow} alt="arrow" />
                <img src={Banner} alt="Banner" />
                <span>{banners.id}</span>
                <span className="saidbar-item__banners-title">{banners.title}</span>
              </div>
            </div>
            <div className="home__content-left-saidbar-item saidbar-item">
              <div className="saidbar-item__choosing">
                <img src={arrow} alt="arrow" />
                <img src={Choosing} alt="Choosing" />
                <span>1</span>
                <span className="saidbar-item__choosing-title">{choosing.title}</span>
              </div>
            </div>
            <div className="home__content-left-saidbar-item saidbar-item">
              <div className="saidbar-item__custom">
                <img src={arrow} alt="arrow" />
                <img src={Custom} alt="Custom" />
                <span>2</span>
                <span className="saidbar-item__custom-title">{custom.title}</span>
              </div>
            </div>
            <div className="home__content-left-saidbar-item saidbar-item">
              <div className="saidbar-item__task">
                <img src={arrow} alt="arrow" />
                <img src={Task} alt="Task" />
                <span>0</span>
                <span className="saidbar-item__task-title">{custom_ussue.title}</span>
              </div>
            </div>
            <div className="home__content-left-saidbar-item saidbar-item">
              <div className="saidbar-item__task">
                <img src={arrow} alt="arrow" />
                <img src={Task} alt="Task" />
                <span>0</span>
                <span className="saidbar-item__task-title">{custom_task.title}</span>
              </div>
            </div>
            <div className="home__content-left-saidbar-item-last"></div>
          </div>
          <div className="home__header--right-title home-rigth-header">
            <div className="home-rigth-header__mouth">
              {arrayMouht.map((el) => {
                return <div key={el} className="home-rigth-header__mouth-item">{el}</div>
              })}
            </div>
            <div className="home-rigth-header__numbers">
              {arrayNumbers.map((el, index) => {
                return <div key={index} className="home-rigth-header__numbers-item"><div key={index} className="home-rigth-header__numbers-item-number">{el}</div></div>
              })}
            </div>
            <div className="home-rigth-header__marketing-border"></div>
            <div className="home-rigth-header__banners-border"></div>
            <div className="home-rigth-header__choosing-border"></div>
            <div className="home-rigth-header__custom-border"></div>
            <div className="home-rigth-header__custom-ussue-border"></div>
            <div className="home-rigth-header__custom-task-border"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
