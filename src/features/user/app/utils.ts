import * as bcrypt from 'bcrypt';

/**
 * @todo 랜덤한 6자리 숫자 생성
 */
export function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * @todo 랜덤한 닉네임 생성
 */
export function generateRandomNickname(): string {
    const prefixes = [
        "멋진", "든든한", "귀여운", "강력한", "재빠른", "화려한", "용감한", "현명한", "활기찬", "유쾌한",
    ];
    const suffixes = [
        "고래밥", "사자", "호랑이", "독수리", "고양이", "강아지", "여우", "팬더", "토끼", "공룡",
    ];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    return `${randomPrefix} ${randomSuffix}`;
}

/**
 * @todo 비밀번호 해싱
 */
export function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

/**
 * @todo 비밀번호 비교
 */
export function comparePassword(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
}