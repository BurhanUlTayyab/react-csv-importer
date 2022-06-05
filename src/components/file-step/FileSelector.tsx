import React, { useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useLocale } from '../../locale/LocaleContext';

import './FileSelector.scss';

export const FileSelector: React.FC<{ uploadFiles: File; onSelected: (file: File) => void }> = ({onSelected, uploadFiles}) => {
  const onSelectedRef = useRef(onSelected);
  onSelectedRef.current = onSelected;

  console.log("Nalli Nihari", uploadFiles)
  const dropHandler = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length < 1) {
      return;
    }

    const file = acceptedFiles[0];
    console.log("Nalli Biryani", file)
    onSelectedRef.current(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: dropHandler
  });

  const l10n = useLocale('fileStep');

  return (
    // <div
    //   className="CSVImporter_FileSelector"
    //   data-active={!!isDragActive}
    //   {...getRootProps()}
    // >
    //   <input {...getInputProps()} />

    //   {isDragActive ? (
    //     <span>{l10n.activeDragDropPrompt}</span>
    //   ) : (
    //     <span>{l10n.initialDragDropPrompt}</span>
    //   )}
    // </div>
    <div>
      
    </div>
  );
};
