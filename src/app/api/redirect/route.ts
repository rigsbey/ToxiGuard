export async function GET(request: Request) {
  const url = new URL(request.url);
  const allowedPaths = ['/', '/terms', '/privacy'];
  
  if (!allowedPaths.includes(url.pathname)) {
    return NextResponse.redirect('https://toxiguard.site/');
  }
  
  return NextResponse.next();
} 