export default function saveFile(actionElement: HTMLAnchorElement | null) {
  if (actionElement) {
    actionElement.href = 'CV_Yuliya_Adamovich.pdf';
    actionElement.download = `Yuliya_Adamovich_CV.pdf`;
  }
}
