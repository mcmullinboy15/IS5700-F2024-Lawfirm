/**
 * asjdflkasjdf
 *
 * @returns
 */
export default function ({ img, children }) {
  return (
    <>
      <div id="header">
        <div class="clearfix">
          <div class="logo">
            <a href="/">{img}</a>
          </div>
          <ul class="navigation">{children}</ul>
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
