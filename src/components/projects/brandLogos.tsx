import type { ReactNode } from 'react'

// Authentic brand SVGs & restrained technical icons (clean, optimized, zero external dependencies)
export function getBrandOrSkillIcon(
  name: string,
  className = 'w-[18px] h-[18px]'
): ReactNode | null {
  const norm = name.toLowerCase().trim()

  switch (norm) {
    // ----------------------------------------------------
    // Machine Learning & AI
    // ----------------------------------------------------
    case 'scikit-learn':
    case 'sklearn':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2a10 10 0 00-7.07 17.07L12 12V2z" fill="#3499CD" />
          <path d="M12 2v10l7.07 7.07A10 10 0 0012 2z" fill="#F89939" />
          <path d="M4.93 19.07A10 10 0 0019.07 19.07L12 12 4.93 19.07z" fill="#2E7599" />
          <circle cx="8" cy="8" r="1.8" fill="#FFFFFF" />
          <circle cx="16" cy="8" r="1.8" fill="#FFFFFF" />
          <circle cx="12" cy="16" r="1.8" fill="#FFFFFF" />
          <path d="M8 8l4 8 4-8" stroke="#FFFFFF" strokeWidth="1.25" fill="none" />
        </svg>
      )

    // Restrained neutral icon for LightGBM (gradient boosting decision tree)
    case 'lightgbm':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="5" r="2.25" />
          <path d="M12 7.25v2.5M12 9.75l-5 3.5M12 9.75l5 3.5" />
          <circle cx="7" cy="15.25" r="2" />
          <circle cx="17" cy="15.25" r="2" />
          <path d="M7 17.25v2M17 17.25v2" />
          <circle cx="7" cy="20.5" r="0.75" fill="currentColor" />
          <circle cx="17" cy="20.5" r="0.75" fill="currentColor" />
        </svg>
      )

    // Restrained neutral icon for XGBoost (sequential gradient boosted trees)
    case 'xgboost':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="5.5" r="1.8" />
          <path d="M6 7.3v2.2l-2.2 2M6 9.5l2.2 2" />
          <circle cx="3.8" cy="13.5" r="1.2" />
          <circle cx="8.2" cy="13.5" r="1.2" />
          <path d="M10.8 9.5h2.4M12.2 8.1l1.4 1.4-1.4 1.4" />
          <circle cx="18" cy="5.5" r="1.8" />
          <path d="M18 7.3v2.2l-2.2 2M18 9.5l2.2 2" />
          <circle cx="15.8" cy="13.5" r="1.2" />
          <circle cx="20.2" cy="13.5" r="1.2" />
          <path d="M6 16.5v2.5M18 16.5v2.5" />
          <circle cx="6" cy="20" r="0.75" fill="currentColor" />
          <circle cx="18" cy="20" r="0.75" fill="currentColor" />
        </svg>
      )

    // Restrained neutral icon for CatBoost (categorical decision tree structure)
    case 'catboost':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3.5" y="4" width="17" height="4" rx="1.2" />
          <path d="M7.7 4v4M12 4v4M16.3 4v4" />
          <path d="M12 8v3.5" />
          <rect x="5.5" y="11.5" width="13" height="4" rx="1.2" />
          <path d="M12 11.5v4" />
          <path d="M8.8 15.5v3M15.2 15.5v3" />
          <circle cx="8.8" cy="19.5" r="0.8" fill="currentColor" />
          <circle cx="15.2" cy="19.5" r="0.8" fill="currentColor" />
        </svg>
      )

    case 'tensorflow':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2.5l7.5 4.3v4.4l-4.5-2.6v11.4L12 21.5V2.5z" fill="#FF6F00" />
          <path d="M12 2.5L4.5 6.8v4.4l4.5-2.6v11.4L12 21.5V2.5z" fill="#FFA800" />
          <path d="M12 8.2l3 1.7v3.5l-3-1.7V8.2z" fill="#FF8F00" />
          <path d="M12 14.5l3 1.7v3.5l-3-1.7v-3.5z" fill="#FF8F00" />
        </svg>
      )

    case 'pytorch':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M17.5 12a5.5 5.5 0 11-1.6-3.9"
            stroke="#EE4C2C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M14.5 4.5c.5 1 1 2 0 3-1 1-1.5 2-1 3.5.5-1 1.5-1.5 2-1.5s1 .5 1.5 1.5c.5-1.5 0-2.5-1-3.5-.5-.5-.5-1.5-1.5-3z"
            fill="#EE4C2C"
          />
          <circle cx="16.5" cy="7.5" r="1.2" fill="#EE4C2C" />
        </svg>
      )

    // Conceptual technical area representation for LLMs (token sequence & attention prediction)
    case 'llms':
    case 'llm':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="4.5" height="4.5" rx="1" />
          <rect x="9.75" y="4" width="4.5" height="4.5" rx="1" />
          <rect x="16.5" y="4" width="4.5" height="4.5" rx="1" />
          <path d="M5.25 8.5v3l6.75 2.5M12 8.5v3M18.75 8.5v3l-6.75 2.5" />
          <rect x="9" y="14.5" width="6" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      )

    // Conceptual technical area representation for RAG (retrieval corpus & vector context)
    case 'rag':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h7a2 2 0 012 2v10a2 2 0 01-2 2H4a1 1 0 01-1-1V5a1 1 0 011-1z" />
          <path d="M6 7.5h4M6 10.5h4M6 13.5h2.5" />
          <circle cx="16" cy="14" r="2.8" />
          <path d="M18 16l2.5 2.5" />
          <path d="M16 4.5l.4.9.9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4.4-.9z" fill="currentColor" />
        </svg>
      )

    case 'generative ai':
    case 'chatgpt':
    case 'openai':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#10A37F">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.79a4.476 4.476 0 0 1 2.34-1.977V12.6a.784.784 0 0 0 .391.68l5.844 3.37-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 8.79zm15.82 3.966-5.843-3.37 2.02-1.167a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.681zm2.24-4.454l-.142-.085-4.782-2.759a.775.775 0 0 0-.78 0L8.855 8.831V6.499a.08.08 0 0 1 .033-.062L13.73 3.65a4.5 4.5 0 0 1 6.67 4.652zM7.56 13.9v-2.766l4.24-2.446 4.24 2.446v2.766l-4.24 2.446-4.24-2.446z" />
        </svg>
      )

    // ----------------------------------------------------
    // Programming & Data
    // ----------------------------------------------------
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path
            fill="#387eb8"
            d="M63.391 12.248c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V77.494c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V26.093c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 19.817c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
          />
          <path
            fill="#ffe052"
            d="M91.682 38.64v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938V85.47h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 98.187c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
          />
        </svg>
      )

    case 'sql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <ellipse cx="12" cy="5.5" rx="8" ry="2.5" fill="#00758F" />
          <ellipse cx="12" cy="5.5" rx="6" ry="1.6" fill="#33A9DC" />
          <path d="M4 5.5v5.5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V5.5" stroke="#00758F" strokeWidth="1.75" />
          <path d="M4 11v5.5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5V11" stroke="#00758F" strokeWidth="1.75" />
          <ellipse cx="12" cy="11" rx="8" ry="2.5" fill="none" stroke="#33A9DC" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M9 14.5l1.8 1.8-1.8 1.8M13.5 18h2.5" stroke="#F29111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )

    case 'pandas':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#5A67D8" d="M46.236 7.567h13.99v29.047h-13.99Zm0 59.668h13.99V96.28h-13.99Z" />
          <path fill="#FFCA00" d="M46.236 45.092h13.99v13.705h-13.99Z" />
          <path fill="#4C51BF" d="M23.763 31.446h13.989V128h-13.99ZM68.245 91.2h13.99v29.046h-13.99Zm0-59.72h13.99v29.047h-13.99Z" />
          <path fill="#E70488" d="M68.245 69.011h13.99v13.705h-13.99Z" />
          <path fill="#FF4A00" d="M90.248 0h13.99v96.554h-13.99Z" />
        </svg>
      )

    case 'numpy':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 2.5L20 7.1v9.8L12 21.5 4 16.9V7.1L12 2.5z" fill="#013243" />
          <path d="M12 2.5l8 4.6-8 4.6-8-4.6 8-4.6z" fill="#4DABCF" opacity="0.9" />
          <path d="M12 11.7l8-4.6v9.8l-8 4.6v-9.8z" fill="#4D77CF" />
          <path d="M12 11.7l-8-4.6v9.8l8 4.6v-9.8z" fill="#013243" />
          <path d="M7.8 8.4v7.2l2.6-1.5V9.9l3.2 1.8v4.2l2.6-1.5V7.2l-2.6 1.5v4.2l-3.2-1.8V8.4l-2.6 1.5z" fill="#FFFFFF" />
        </svg>
      )

    // ----------------------------------------------------
    // Analytics
    // ----------------------------------------------------
    case 'excel':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="2" y="3.5" width="20" height="17" rx="2.5" fill="#107C41" />
          <path d="M14 3.5h5.5a2.5 2.5 0 012.5 2.5v12a2.5 2.5 0 01-2.5 2.5H14V3.5z" fill="#0E6533" />
          <rect x="3.5" y="5.5" width="10.5" height="13" rx="1.5" fill="#21A366" />
          <path d="M6.2 8.2l2.3 3.8-2.3 3.8h1.8l1.4-2.5 1.4 2.5h1.8l-2.3-3.8 2.3-3.8h-1.8l-1.4 2.5-1.4-2.5H6.2z" fill="#FFFFFF" />
        </svg>
      )

    case 'matplotlib':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#11557C" />
          <path d="M12 2a10 10 0 017.07 17.07L12 12V2z" fill="#1F77B4" />
          <path d="M19.07 19.07A10 10 0 014.93 19.07L12 12l7.07 7.07z" fill="#FF7F0E" />
          <path d="M4.93 19.07A10 10 0 014.93 4.93L12 12 4.93 19.07z" fill="#2CA02C" />
          <circle cx="12" cy="12" r="5" fill="#0D3B59" />
          <path d="M5 13.5c1.5-3 3-3 4.5 0s3 3 4.5 0 3-3 4.5 0" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.8" fill="#FFFFFF" />
        </svg>
      )

    case 'seaborn':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="4.5" fill="#38527B" />
          <path
            d="M4.5 17c2 0 3-2 4-5s2-5 4-5 3 2 4 5 2 5 3 5"
            stroke="#7998B5"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M4.5 17c2 0 3-1.5 4-3.5s2-3.5 4-3.5 3 1.5 4 3.5 2 3.5 3 3.5"
            stroke="#D9E2EC"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="12.5" cy="8.5" r="1.5" fill="#4BC0C0" />
        </svg>
      )

    // ----------------------------------------------------
    // Development & Databases
    // ----------------------------------------------------
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path
            d="M8.5 2.5h7v2h-1v5.2l4.8 9.3A2.8 2.8 0 0116.8 23H7.2a2.8 2.8 0 01-2.5-4l4.8-9.3V4.5h-1V2.5z"
            fill="#F3F4F6"
          />
          <path
            d="M6.8 19l3.2-6h4l3.2 6a1.5 1.5 0 01-1.3 2H8.1a1.5 1.5 0 01-1.3-2z"
            fill="#00D2FF"
          />
          <circle cx="11" cy="17" r="1.1" fill="#FFFFFF" opacity="0.9" />
          <circle cx="13.8" cy="18" r="0.8" fill="#FFFFFF" opacity="0.9" />
          <path
            d="M13.5 1.8c1-1.5 2.8-1 3.3.4s-.5 2.3-1.8 2.3"
            stroke="#22C55E"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )

    case 'html':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
          <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
          <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
          <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
        </svg>
      )

    case 'css':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#1572B6" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
          <path fill="#33A9DC" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
          <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
          <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
        </svg>
      )

    case 'html/css':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
          <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
          <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
          <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
        </svg>
      )

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
          <path
            fill="#323330"
            d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
          />
        </svg>
      )

    case 'sqlite':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <defs>
            <linearGradient id="sqliteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop stopColor="#95d7f4" offset="0%" />
              <stop stopColor="#0f7fcc" offset="100%" />
            </linearGradient>
          </defs>
          <path
            d="M69.5 99.176c-.059-.73-.094-1.2-.094-1.2S67.2 83.087 64.57 78.642c-.414-.707.043-3.594 1.207-7.88.68 1.169 3.54 6.192 4.118 7.81.648 1.824.78 2.347.78 2.347s-1.57-8.082-4.144-12.797a162.286 162.286 0 012.004-6.265c.973 1.71 3.313 5.859 3.828 7.3.102.293.192.543.27.774.023-.137.05-.274.074-.414-.59-2.504-1.75-6.86-3.336-10.082 3.52-18.328 15.531-42.824 27.84-53.754H16.9c-5.387 0-9.789 4.406-9.789 9.789v88.57c0 5.383 4.406 9.789 9.79 9.789h52.897a118.657 118.657 0 01-.297-14.652"
            fill="#0b7fcc"
          />
          <path
            d="M65.777 70.762c.68 1.168 3.54 6.188 4.117 7.809.649 1.824.781 2.347.781 2.347s-1.57-8.082-4.144-12.797a164.535 164.535 0 012.004-6.27c.887 1.567 2.922 5.169 3.652 6.872l.082-.961c-.648-2.496-1.633-5.766-2.898-8.328 3.242-16.871 13.68-38.97 24.926-50.898H16.899a6.94 6.94 0 00-6.934 6.933v82.11c17.527-6.731 38.664-12.88 56.855-12.614-.672-2.605-1.441-4.96-2.25-6.324-.414-.707.043-3.597 1.207-7.879"
            fill="url(#sqliteGradient)"
          />
          <path
            d="M115.95 2.781c-5.5-4.906-12.164-2.933-18.734 2.899a44.347 44.347 0 00-2.914 2.859c-11.25 11.926-21.684 34.023-24.926 50.895 1.262 2.563 2.25 5.832 2.894 8.328.168.64.32 1.242.442 1.754.285 1.207.437 1.996.437 1.996s-.101-.383-.515-1.582c-.078-.23-.168-.484-.27-.773-.043-.125-.105-.274-.172-.434-.734-1.703-2.765-5.305-3.656-6.867-.762 2.25-1.437 4.36-2.004 6.265 2.578 4.715 4.149 12.797 4.149 12.797s-.137-.523-.782-2.347c-.578-1.621-3.441-6.64-4.117-7.809-1.164 4.281-1.625 7.172-1.207 7.88.809 1.362 1.574 3.722 2.25 6.323 1.524 5.867 2.586 13.012 2.586 13.012s.031.469.094 1.2a118.653 118.653 0 00.297 14.651c.504 6.11 1.453 11.363 2.664 14.172l.828-.449c-1.781-5.535-2.504-12.793-2.188-21.156.48-12.793 3.422-28.215 8.856-44.289 9.191-24.27 21.938-43.738 33.602-53.035-10.633 9.602-25.023 40.684-29.332 52.195-4.82 12.891-8.238 24.984-10.301 36.574 3.55-10.863 15.047-15.53 15.047-15.53s5.637-6.958 12.227-16.888c-3.95.903-10.43 2.442-12.598 3.352-3.2 1.344-4.067 1.8-4.067 1.8s10.371-6.312 19.27-9.171c12.234-19.27 25.562-46.648 12.141-58.621"
            fill="#0b7fcc"
          />
        </svg>
      )

    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path
            d="M12.5 3c-4.5 0-7.5 3-7.5 7 0 2.5 1.5 5 3 6.5l.5 3.5h3l.5-2.5c.5.2 1 .3 1.5.3 4.5 0 7.5-3 7.5-7s-4-7.3-8.5-7.3z"
            fill="#336791"
          />
          <path
            d="M7.5 9c-1 0-2.5 1-2.5 3.5s1.5 4.5 3.5 4.5c.5-1 1-2.5 1-4.5S8.5 9 7.5 9z"
            fill="#2B5B84"
          />
          <path
            d="M15 15.5c-1 1.5-2.5 2-4 2 1-1.5 1.5-3 1.5-4.5h2.5z"
            fill="#FFFFFF"
          />
          <circle cx="15.5" cy="9.5" r="1.2" fill="#FFFFFF" />
          <circle cx="15.8" cy="9.5" r="0.6" fill="#1E395B" />
        </svg>
      )

    // ----------------------------------------------------
    // Tools & Workflow
    // ----------------------------------------------------
    case 'git & github':
    case 'git':
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3.2" y="3.2" width="9" height="9" rx="1.5" transform="rotate(45 7.7 7.7)" fill="#F05032" />
          <circle cx="7.7" cy="4.8" r="1.1" fill="#FFFFFF" />
          <circle cx="7.7" cy="10.6" r="1.1" fill="#FFFFFF" />
          <circle cx="10.6" cy="7.7" r="1.1" fill="#FFFFFF" />
          <path d="M7.7 4.8v5.8M7.7 7.7h2.9" stroke="#FFFFFF" strokeWidth="0.9" />
          <circle cx="16.5" cy="15.5" r="5" fill="#24292E" />
          <path
            d="M16.5 12.3c-1.8 0-3.2 1.4-3.2 3.2 0 1.4.9 2.7 2.2 3.1.2 0 .2-.1.2-.2v-.6c-.9.2-1.1-.4-1.1-.4-.2-.4-.3-.5-.3-.5-.3-.2 0-.2 0-.2.3 0 .5.3.5.3.3.5.8.4 1 .3 0-.2.1-.4.2-.5-.9-.1-1.5-.5-1.5-1.6 0-.3.1-.6.3-.9 0-.1-.1-.4 0-.8 0 0 .3-.1.9.4.3-.1.5-.1.8-.1s.5 0 .8.1c.6-.5.9-.4.9-.4.1.4 0 .7 0 .8.2.3.3.6.3 1 0 1.3-.7 1.7-1.7 1.8.2.2.3.4.3.8v1.1c0 .1 0 .2.2.2 1.3-.4 2.2-1.7 2.2-3.1 0-1.8-1.4-3.2-3.2-3.2z"
            fill="#FFFFFF"
          />
        </svg>
      )

    // ----------------------------------------------------
    // Existing Experience & Misc Icons
    // ----------------------------------------------------
    case 'ms office':
    case 'microsoft office':
    case 'office':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="1.5" />
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="1.5" />
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="1.5" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="1.5" />
        </svg>
      )

    case 'website management':
    case 'web':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )

    case 'graphic design':
    case 'design':
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      )

    case 'eda':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="3.5" y="13" width="3" height="7" rx="0.75" fill="#06B6D4" />
          <rect x="8" y="8" width="3" height="12" rx="0.75" fill="#8B5CF6" />
          <rect x="12.5" y="5" width="3" height="15" rx="0.75" fill="#F59E0B" />
          <rect x="17" y="10" width="3" height="10" rx="0.75" fill="#10B981" />
          <path
            d="M5 12l4.5-5 4.5 2 4.5-6"
            stroke="#EC4899"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="5" cy="12" r="1.25" fill="#FFFFFF" />
          <circle cx="9.5" cy="7" r="1.25" fill="#FFFFFF" />
          <circle cx="14" cy="9" r="1.25" fill="#FFFFFF" />
          <circle cx="18.5" cy="3" r="1.25" fill="#FFFFFF" />
        </svg>
      )

    case 'redis':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z" />
          <path fill="#D82C20" d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z" />
          <path fill="#fff" d="M80.4 26.1l-10.8 1.2-2.5 5.8-3.9-6.5-12.5-1.1 9.3-3.4-2.8-5.2 8.8 3.4 8.2-2.7L72 23zM66.5 54.5l-20.3-8.4 29.1-4.4z" />
          <ellipse fill="#fff" cx="38.4" cy="35.4" rx="15.5" ry="6" />
        </svg>
      )

    case 'celery':
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#37814A" />
          <path
            d="M8.5 6.5h2.4l3.5 7 3.5-7h2.4l-4.8 9.5 4.8 9.5h-2.4l-3.5-7-3.5 7H8.5l4.8-9.5L8.5 6.5z"
            fill="#B3D634"
          />
        </svg>
      )

    case 'chart.js':
    case 'chartjs':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#36a2eb" d="M116.217 64.445c-17.894.351-14.167 11.679-26.778 14.544C76.628 81.899 74.605 47.7 61.797 47.7c-12.81 0-15.647 33.221-31.686 56.027l-.458.646 34.388 19.85 52.176-30.121z" />
          <path fill="#ffce56" d="M116.217 63.414c-5.99-7.688-10.054-16.526-18.795-16.526-15.47 0-11.399 25.236-28.496 25.236-17.098 0-18.896-27.145-38.266-1.628-6.172 8.13-11.14 17.196-15.042 25.774l48.423 27.954 52.176-30.121z" />
          <path fill="#fe6184" d="M11.863 73.867c5.87-16.257 8.404-29.423 19.611-29.423 17.097 0 21.166 48.031 35.823 43.145 14.654-4.884 13.026-30.935 35.823-30.935 4.339 0 8.77 2.658 13.097 6.958v30.49l-52.176 30.121-52.178-30.121V73.867Z" />
        </svg>
      )

    case 'vue.js':
    case 'vue':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e" />
          <path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883" />
        </svg>
      )

    case 'cloudflare workers':
    case 'cloudflare':
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path fill="#FFF" d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z" />
          <path
            fill="#F38020"
            d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
          />
          <path
            fill="#FAAE40"
            d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"
          />
        </svg>
      )

    default:
      return null
  }
}
