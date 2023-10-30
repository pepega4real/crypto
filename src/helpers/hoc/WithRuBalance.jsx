/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
export const WithRuBalance = (Component) => {
  return (props) => {
    const { balance } = props
    const ruBalance = balance * 100
    return <Component {...props} ruBalance={ruBalance} />
  }
}
