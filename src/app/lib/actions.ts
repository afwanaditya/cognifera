// import { revalidatePath } from "next/cache"; 

export async function deleteBookAction(bookId: number) {
  console.log(`--- DELETE ACTION TRIGGERED for ID: ${bookId} ---`);


  // revalidatePath("/dashboard/admin");
}
