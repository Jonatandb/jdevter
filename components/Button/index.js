import { colors } from 'styles/theme'

const Button = ({ children, disabled, onClick }) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            align-items: center;
            background: ${colors.black};
            border-radius: 9999px;
            border: 0;
            color: #fff;
            cursor: pointer;
            display: flex;
            font-size: 16px;
            font-weight: 800;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
            user-select: none;
            outline: 0;
          }

          button[disabled] {
            pointer-events: none;
            opacity: 0.2;
          }

          button:hover {
            opacity: 0.7;
          }

          button > :global(svg) {
            margin-right: 8px;
          }
        `}
      </style>
    </>
  )
}

export default Button
