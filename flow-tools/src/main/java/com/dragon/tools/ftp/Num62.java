package com.dragon.tools.ftp;

/**
 * 62进制数字
 */
public class Num62 {
    /**
     * 62个字母和数字，含大小写
     */
    public static final char[] N62_CHARS = {'0', '1', '2', '3', '4', '5', '6',
            '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
            'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
            'x', 'y', 'z'};
    /**
     * 36个小写字母和数字
     */
    public static final char[] N36_CHARS = {'0', '1', '2', '3', '4', '5', '6',
            '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
            'x', 'y', 'z'};
    /**
     * 长整型用N36表示的最大长度
     */
    public static final int LONG_N36_LEN = 13;
    /**
     * 长整型用N62表示的最大长度
     */
    public static final int LONG_N62_LEN = 11;

    /**
     * 长整型转换成字符串
     *
     * @param l
     * @param chars
     * @return
     */
    private static StringBuilder longToNBuf(long l, char[] chars) {
        int upgrade = chars.length;
        StringBuilder result = new StringBuilder();
        int last;
        while (l > 0) {
            last = (int) (l % upgrade);
            result.append(chars[last]);
            l /= upgrade;
        }
        return result;
    }

    /**
     * 长整数转换成N62
     *
     * @param l
     * @return
     */
    public static String longToN62(long l) {
        return longToNBuf(l, N62_CHARS).reverse().toString();
    }

    /**
     * 长整型转换成N36
     *
     * @param l
     * @return
     */
    public static String longToN36(long l) {
        return longToNBuf(l, N36_CHARS).reverse().toString();
    }

    /**
     * 长整数转换成N62
     *
     * @param l
     * @param length 如不足length长度，则补足0。
     * @return
     */
    public static String longToN62(long l, int length) {
        StringBuilder sb = longToNBuf(l, N62_CHARS);
        for (int i = sb.length(); i < length; i++) {
            sb.append('0');
        }
        return sb.reverse().toString();
    }

    /**
     * 长整型转换成N36
     *
     * @param l
     * @param length 如不足length长度，则补足0。
     * @return
     */
    public static String longToN36(long l, int length) {
        StringBuilder sb = longToNBuf(l, N36_CHARS);
        for (int i = sb.length(); i < length; i++) {
            sb.append('0');
        }
        return sb.reverse().toString();
    }

    /**
     * N62转换成整数
     *
     * @param n62
     * @return
     */
    public static long n62ToLong(String n62) {
        return nToLong(n62, N62_CHARS);
    }

    /**
     * N36转换成整数
     *
     * @param n36
     * @return
     */
    public static long n36ToLong(String n36) {
        return nToLong(n36, N36_CHARS);
    }

    private static long nToLong(String s, char[] chars) {
        char[] nc = s.toCharArray();
        long result = 0;
        long pow = 1;
        for (int i = nc.length - 1; i >= 0; i--, pow *= chars.length) {
            int n = findNIndex(nc[i], chars);
            result += n * pow;
        }
        return result;
    }

    private static int findNIndex(char c, char[] chars) {
        for (int i = 0; i < chars.length; i++) {
            if (c == chars[i]) {
                return i;
            }
        }
        throw new RuntimeException("N62(N36)非法字符：" + c);
    }

    public static void main(String[] args) {
        System.out.println(longToN62(Long.MAX_VALUE));
    }
}
