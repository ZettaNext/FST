const fs = require('fs');
const path = 'c:\\Users\\Administrador\\Documents\\NB final 9\\style.css';
try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split(/\r?\n/);
    // Keep first 14873 lines (0 to 14872)
    const validLines = lines.slice(0, 14873);
    const newContent = validLines.join('\n') + `
}

/* Visibility Control for Responsive Header */
.mobile-view {
    display: none !important;
}

.desktop-view {
    display: flex !important;
}

@media (max-width: 768px) {
    .mobile-view {
        display: flex !important;
    }

    .desktop-view {
        display: none !important;
    }
}
`;
    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Successfully fixed style.css');
} catch (e) {
    console.error('Error:', e);
}
