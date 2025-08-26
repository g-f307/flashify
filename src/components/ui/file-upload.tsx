import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from './card';
import { Button } from './button';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, className }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  const removeFile = () => {
    setUploadedFile(null);
  };

  return (
    <Card className={cn("p-8 border-2 border-dashed transition-all duration-300", className)}>
      {!uploadedFile ? (
        <div
          {...getRootProps()}
          className={cn(
            "flex flex-col items-center justify-center space-y-4 cursor-pointer text-center min-h-[200px]",
            isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
          )}
        >
          <input {...getInputProps()} />
          <div className="p-4 rounded-full bg-primary/10">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium">
              {isDragActive ? "Solte o PDF aqui..." : "Arraste e solte um PDF aqui"}
            </p>
            <p className="text-sm text-muted-foreground">
              ou clique para selecionar um arquivo
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-4 bg-gradient-card rounded-lg shadow-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-full bg-success/10">
              <FileText className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="font-medium">{uploadedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={removeFile}
            className="text-destructive hover:text-destructive/80"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
    </Card>
  );
};