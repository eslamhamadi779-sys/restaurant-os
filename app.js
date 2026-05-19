// 1. استدعاء مكتبة سوبابيز من السحاب مباشرة بدون تسطيب
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

// 2. حط بياناتك السرية هنا للتجربة المؤقتة (وهنخفيها لما نرفع لجيت هاب)
const SUPABASE_URL = "YOUR_SUPABASE_URL_SECRET"
const SUPABASE_KEY = "YOUR_SUPABASE_KEY_SECRET"
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// 3. دالة ذكية لقراءة المخزن والحبل السري شغال!
async function checkInventory() {
    let { data: Products, error } = await supabase
        .from('products')
        .select(`
            product_name,
            category,
            inventory_log (quantity, transaction_type, expiry_date)
        `)

    if (error) {
        console.error("? عطل في غرفة العمليات:", error)
    } else {
        console.log("?? تقرير المخزن الحالي لـ إسلام الهاشمي:")
        console.log(JSON.stringify(Products, null, 2))
    }
}

// تشغيل الدالة فوراً
checkInventory()
