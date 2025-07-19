import React from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate()
  const { data } = getData()

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property])
    newVal = [...new Set(newVal)]
    return newVal
  }

  const categoryOnlyData = getUniqueCategory(data, "category")

  // Split into 3 rows
  const row1 = categoryOnlyData.slice(0, 5)
  const row2 = categoryOnlyData.slice(5, 10)
  const row3 = categoryOnlyData.slice(10)

  // Style for continuous scrolling
  const sliderStyle = (direction = "left", duration = 20) => ({
    display: 'flex',
    gap: '1rem',
    animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} ${duration}s linear infinite`,
    width: 'max-content'
  })

  return (
    <div style={{ background: 'linear-gradient(to right, #f7ebeb, #f1d5cc, #f3e7c3)', padding: '1rem 0' }}>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>

      {/* Row 1 */}
      <div style={{ overflow: 'hidden', margin: '1rem 0' }}>
        <div style={sliderStyle("left", 15)}>
          {[...row1, ...row1].map((item, index) => (
            <button key={index}
              onClick={() => navigate(`/category/${item}`)}
              style={{
                textTransform: 'uppercase',
                background: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                color: '#333',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ overflow: 'hidden', margin: '1rem 0' }}>
        <div style={sliderStyle("right", 20)}>
          {[...row2, ...row2].map((item, index) => (
            <button key={index}
              onClick={() => navigate(`/category/${item}`)}
              style={{
                textTransform: 'uppercase',
                background: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                color: '#333',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Row 3 */}
      <div style={{ overflow: 'hidden', margin: '1rem 0' }}>
        <div style={sliderStyle("left", 25)}>
          {[...row3, ...row3].map((item, index) => (
            <button key={index}
              onClick={() => navigate(`/category/${item}`)}
              style={{
                textTransform: 'uppercase',
                background: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                color: '#333',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category
