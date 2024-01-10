import styled from "styled-components";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer(props: PdfViewerProps) {
  const { pdfUrl } = props;
  return (
    <PdfViewerWrapper>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <ViewerWrapper>
          <Viewer fileUrl={pdfUrl} theme={{ theme: "light" }} />
        </ViewerWrapper>
      </Worker>
    </PdfViewerWrapper>
  );
}

const PdfViewerWrapper = styled.div`
  ${({ theme }) => theme.effects.pdf_shadow};

  width: calc((100vw - 16.8rem) / 2);
  height: calc(100vh - 16.4rem);
  border-radius: 8px;
`;

const ViewerWrapper = styled.div`
  height: calc(100vh - 16.4rem);
  padding: 2rem 0.8rem 0;
`;
