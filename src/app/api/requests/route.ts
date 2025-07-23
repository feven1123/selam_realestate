export async function POST(req: Request) {
    const { name, email, phone, message } = await req.json();
  
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
  
    try {
      const saved = await prisma.request.create({
        data: { name, email, phone, message },
      });
  
      return NextResponse.json(saved, { status: 201 });
    } catch (error) {
      console.error('Error saving request:', error);
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
  }
  