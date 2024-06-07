import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

export const Dropdown = ({ title, links, isOpen, toggleDropdown }) => {


  return (
    <div className="dropdown" onClick={toggleDropdown}>
    <button className="dropbtn">{title} {isOpen ? <FaCaretUp /> : <FaCaretDown />}</button>
    <div className={isOpen ? "dropdown-content show" : "dropdown-content"}>
      {links.map((link, index) => (
        <Link key={index} to={link.to}>{link.text}</Link>
      ))}
    </div>
  </div>
  )
}
