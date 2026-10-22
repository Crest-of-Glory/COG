// ==========================================
// การตั้งค่า Cloudinary สำหรับ Crest of Glory
// ==========================================
export const CLOUD_NAME = 'd9auhk8m';
export const UPLOAD_PRESET = 'crest_of_glory';

/**
 * ฟังก์ชันสำหรับอัปโหลดรูปภาพไปยัง Cloudinary (Unsigned Upload)
 * @param {File} file - ไฟล์รูปภาพที่ผู้เล่นเลือกจากแกลเลอรี
 * @returns {Promise<string>} - คืนค่ากลับมาเป็น URL รูปภาพ HTTPS
 */
export async function uploadToCloudinary(file) {
  if (!file) {
    throw new Error('กรุณาเลือกไฟล์รูปภาพก่อนอัปโหลด');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    
    if (data.secure_url) {
      return data.secure_url;
    } else {
      throw new Error(data.error?.message || 'อัปโหลดรูปภาพไม่สำเร็จ');
    }
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    throw error;
  }
}
