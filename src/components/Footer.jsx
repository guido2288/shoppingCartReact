import './Footer.css'
export const Footer = ({ filters }) => {
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
