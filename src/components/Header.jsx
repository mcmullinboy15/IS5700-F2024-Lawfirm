/**
 * @param {object} props
 * @param {JSX.Element} props.img
 * @param {JSX.Element} props.children
 *
 * @returns
 */
export default function ({ img, children }) {
  return (
    <>
      <div>
        <div>
          {img && (
            <div>
              <a href="/">{img}</a>
            </div>
          )}
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
}

/**
 * @typedef {React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>} HeaderButtonProps
 * @property {string} className
 * @property {JSX.Element} children
 *
 * @param {HeaderButtonProps} props
 */
export function HeaderButton({ className, children, ...props }) {
  return (
    <li className={className}>
      <a {...props}>{children}</a>
    </li>
  );
}
