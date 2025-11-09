// Class Induk
class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  hitungBonus() {
    return 0; // akan dioverride di subclass
  }
}

// Class Turunan: Karyawan Tetap
class KaryawanTetap extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.10; // 10% dari gaji
  }
}

// Class Turunan: Karyawan Kontrak
class KaryawanKontrak extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.05; // 5% dari gaji
  }
}

// --- Program Utama ---

const daftarKaryawan = [
  new KaryawanTetap("Budi", 8000000),
  new KaryawanKontrak("Sita", 6000000)
];

let totalBonus = 0;

for (const k of daftarKaryawan) {
  const bonus = k.hitungBonus();
  console.log(`${k.nama} mendapatkan bonus: Rp${bonus.toLocaleString("id-ID")}`);
  totalBonus += bonus;
}

console.log(`\nTotal bonus seluruh karyawan: Rp${totalBonus.toLocaleString("id-ID")}`);
