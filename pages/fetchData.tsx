import { supabaseAdmin } from "./client";

export async function getStaticProps() {
    const { data } = await supabaseAdmin.from('images').select('*');
    return {
      props: {
        images: data
      }
    };
  }