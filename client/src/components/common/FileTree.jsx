import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, FileCode, FileText, Image as ImageIcon } from 'lucide-react';
import styles from './FileTree.module.css';

const FileIcon = ({ name }) => {
  const ext = name.split('.').pop().toLowerCase();
  if (['js', 'jsx', 'ts', 'tsx'].includes(ext)) return <FileCode size={16} className={styles.iconCode} />;
  if (['png', 'jpg', 'svg', 'webp'].includes(ext)) return <ImageIcon size={16} className={styles.iconImage} />;
  return <FileText size={16} className={styles.iconText} />;
};

const TreeNode = ({ node, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = node.children && node.children.length > 0;

  return (
    <div className={styles.nodeWrapper}>
      <div 
        className={`${styles.node} ${depth === 0 ? styles.root : ''}`} 
        style={{ paddingLeft: \`\${depth * 1.5}rem\` }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isFolder && (
          <span className={styles.toggle}>
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
        {!isFolder && <span className={styles.spacer}></span>}
        
        {isFolder ? (
          <Folder size={16} className={styles.iconFolder} />
        ) : (
          <FileIcon name={node.name} />
        )}
        
        <span className={styles.name}>{node.name}</span>
        {node.comment && <span className={styles.comment}>// {node.comment}</span>}
      </div>

      {isFolder && isOpen && (
        <div className={styles.children}>
          {node.children.map((child, i) => (
            <TreeNode key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree = ({ data, title }) => {
  return (
    <div className={styles.container}>
      {title && <div className={styles.header}>{title}</div>}
      <div className={styles.tree}>
        <TreeNode node={data} />
      </div>
    </div>
  );
};

export default FileTree;
