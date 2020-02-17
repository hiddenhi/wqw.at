var base='PG1ldGEgY2hhcnNldD0idXRmLTgiPgo8c3R5bGU+DQoqe21hcmdpbjowO30NCjwvc3R5bGU+DQo8Ym9keT48L2JvZHk+DQo8c2NyaXB0Pg0KZnVuY3Rpb24gZ2d6KCl7DQp2YXIgaW5kZTI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7DQppbmRlMi5pZD0iZmRpdjIiOw0KaW5kZTIuc3R5bGUucG9zaXRpb249InJlbGF0aXZlIjsNCmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5kZTIpOw0KdmFyIGRpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsNCmRpdi5pZD0ianFieiI7DQpkaXYuc3R5bGUud2lkdGg9IjI0MHB4IjsNCmRpdi5zdHlsZS5oZWlnaHQ9IjUwcHgiOw0KZGl2LnN0eWxlLnBvc2l0aW9uPSJyZWxhdGl2ZSI7DQpkaXYuc3R5bGUuYm90dG9tPSIwIjsNCmRpdi5zdHlsZS5sZWZ0PSI1MCUiOw0KZGl2LnN0eWxlLnRyYW5zZm9ybT0idHJhbnNsYXRlWCgtNTAlKSI7DQpkaXYuc3R5bGUubWFyZ2luPSI1IDAgNSAwIjsNCnZhciBpZD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgianFiMiIpOw0KZmRpdjIuYXBwZW5kQ2hpbGQoZGl2KTsNCnZhciBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIpOw0KdmFyIHRleHQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyNqcWJ6OmFmdGVye2NvbnRlbnQ6IiI7YmFja2dyb3VuZDp1cmwoImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjBQU0l4TlRneE9EZzNNak16TlRZMUlpQmpiR0Z6Y3owaWFXTnZiaUlnZG1sbGQwSnZlRDBpTUNBd0lERXdORE1nTVRBeU5DSWdkbVZ5YzJsdmJqMGlNUzR4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhBdGFXUTlJakV3TWpFaUlIZHBaSFJvUFNJeU1EQWlJR2hsYVdkb2REMGlNakF3SWlCemRIbHNaVDBpWW1GamEyZHliM1Z1WkMxamIyeHZjam9qWm1abVptWm1PeUlnWm1sc2JEMGlJelV6WXpWa1pDSStQSEJoZEdnZ1pEMGlUVE0wTnk0eE1URTRNVEVnTWpJekxqUTBOVFkyT1dNd0xqTXdNak0yTWlBd0xqVXdNemt6TnlBeE5DNHhNVEF5TXpZZ01UUXVNekV4T0RFeElETXdMall6T1RNM0lETXdMamMwTURFMU9Hd3lPUzQ1TXpNNE5UZ2dNekF1TURNME5qUTFTRFV3TVM0NU1qRXlObU0xTVM0NE1EUTNNalFnTUNBeE1qZ2dNQzR4TURBM09EY2dNVFk1TGpNeU1qZ3pOQ0F3TGpNd01qTTJNMnczTlM0d09EWTJNVFVnTUM0eU1ERTFOelFnTUM0eU1ERTFOelFnTVRnekxqUXpNekEzTVNBd0xqTXdNak0yTXlBeE9ETXVORE16TURjeElETXlMakkxTVRrMk9DQXdMak13TWpNMk1pQXpNaTR5TlRFNU5qa2dNQzR5TURFMU56VldNakl5TGpjME1ERTFOMGcxTnpndU9ESXlNRFEzWXkweE1qY3VOems0TkRJMUlEQXRNak15TGpFeE16TTROaUF3TGpNd01qTTJNaTB5TXpFdU56RXdNak0ySURBdU56QTFOVEV5ZWlJZ2NDMXBaRDBpTVRBeU1pSStQQzl3WVhSb1BqeHdZWFJvSUdROUlrMHlOakl1TlRVeE1UZ3hJRE0yTnk0NE56UXdNVFpzTXpBdU1qTTJNakl4SURNd0xqSXpOakl5U0RZeU1TNDROVGd5TmpoMk16WXdMamd4T0RnNU9HZzJOUzQxTVRFNE1URldNek0zTGpZek56YzVOVWd5TXpJdU16RTBPVFl4YkRNd0xqSXpOakl5SURNd0xqSXpOakl5TVhvaUlIQXRhV1E5SWpFd01qTWlQand2Y0dGMGFENDhjR0YwYUNCa1BTSk5NVFV5TGpnNU5EUTRPQ0EwTnpjdU9UTXpPRFU0UXpNek55NHlNelEyTkRZZ05qWXpMakE0TURNeE5TQTFOVGd1T0RZMk1UUXlJRGc0TkM0NU1UTXpPRFlnTlRVNUxqVTNNVFkxTkNBNE9EUXVPVEV6TXpnMll6QXVOREF6TVRVZ01DQXdMamd3TmpJNU9TMDVOUzR5TkRRd09UUWdNQzQ0TURZeU9Ua3RNakV4TGpZMU16VTBNMVkwTmpFdU5qQTJNams1U0RFek5pNDFOalk1TWpsc01UWXVNekkzTlRVNUlERTJMak15TnpVMU9Yb2lJSEF0YVdROUlqRXdNalFpUGp3dmNHRjBhRDQ4TDNOMlp6ND0iKSBuby1yZXBlYXQ7bGVmdDowO2JhY2tncm91bmQtc2l6ZToxMDAlIDEwMCU7YmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO2ZvbnQtc2l6ZTpweDt3aWR0aDoxNXB4O2hlaWdodDoxNXB4O2xpbmUtaGVpZ2h0OjEycHg7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7Zm9udC13ZWlnaHQ6IDkwMDsvKmJhY2tncm91bmQ6I2ZmZmZmZiovO2NvbG9yOiM1M2M1ZGQ7fSNqcWJ6OmJlZm9yZXtjb250ZW50OiLlub/lkYoiO2hlaWdodDoxNXB4O2xpbmUtaGVpZ2h0OjE2cHg7cG9zaXRpb246YWJzb2x1dGU7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXdlaWdodDo5MDA7Ym90dG9tOjA7YmFja2dyb3VuZDojZmZmZmZmO2NvbG9yOiM1M2M1ZGQ7Zm9udC1zaXplOjEwcHg7cGFkZGluZzogMDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjE1O30janFient3aWR0aDoxMDAlO2hlaWdodDo1MHB4O2JhY2tncm91bmQ6dXJsKCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQTUwQUFBREJDQU1BQUFCN1ZpUnBBQUFCL2xCTVZFVUFBQUQ2eHozNzFrUDZ4VDM3MTBQNzJFVDZ5VDlNcjFEazVPVC8zd2Y2eGozdTgvcjZ5ei82elVENzBrSDZ5ai82eHovNzFVUDcwRUQ3MlVUNzAwSC8vLy82emtENzBVSGE0dHRadFZ4a3VXZFZzMWgzd0hwTnNGSmN0bUZ5djNYbDYrVGw1K1Zzdkc4RUF3RHA0OHdKQ0FGOXczL0Uyc1JQc1ZmVTROV2J6cDBRRGdJWUZRUDUvZm4yMEdEbzRjdlAzcy9LM2N2ZTVOK0p4NHVWekpmLzVRZWh6cUxoNU9IZjVlWGw1ZUtZMk01WnNGRHgrZkpTc0ZHUHk1RnB2NEs5MDVNdUtBYUcwN3RQczJLLzNMOGpId1NDektwS1B3MmwxS2k2Mkx1UnhYalo1dWEyM0xqLzRnZjMxbUw3NFFmZjQ4L1I1K3R0dVY3dzhPVEgzOWZrNU5mZzhlRjN5SjNxMUFhSmNTUFY3ZFk1TVFtMTFyWHg2OHhhU2hmaHpRYXAyTVQvNlFmTTI3RlVUUUowYWdQeTJnZGl0VmhrWEFMbDVkMTh1Rk5BT1FiMzJtUFQzYnlFeDRiMzNnZlQ0K0N5M00vbzllbXNuZ1dieUlHdXo0ZXYxckRxNmQrR3dXdlNyVGFhZnlpNHFRVlp1R3hOdW4vTDZNeDNZaDdEc3dWNnZXWHF3RHVDZHdQdHlqL0IxNk50eEpGU3VISzk0ZHZJcFRQaXVqcVdpd1JzdEZHcjN1Qm5WaHJ6eFQzZzQ4U3NqaXp2NWIzUXZ3YWIxYnloMmN6YzNiSzluRERZeGdiUTJhQ3YwWmVna3dUZzYrcVl4V3YxMEVGanZIZmF0VGpKMVpUWDRNZFF2WW1UMGErR3lwMk1nQVNpeW5mRTVjWjlzRXU5NWZEbWR1WDlBQUFvREVsRVFWUjQydXlkajI4U2FSckhKNDNtYlhPSlNXOTc5aWRvTzVtV2RpYlp0cFoyMFZobExkTGVIb2Q3dTBZSVBkZ0tpTWNwYmppckJaTmlRVS9hbFVnNEQzWlJyQnV2U2ZhL3ZHbnJEQVBNd0F3TTBOWHZ4NlJwelpRWnlIejZQTy83UHU4ejFCOEFBQ2VTUDFGZi9QNzU1NWU5QUh4NndFNEFUcTZkcDMvL3dFNEFPMkVuQUxBVGRnSUFPd0dBbmJBVEFOZ0pBT3lFblFEQVR0Z0pZS2V1bk9vdmxWSVNTcVVlMkFtQUpqdFA2VTlwZHl1ZmpibTNNMTY3Z05lYjJYYkhzdm45VkwvKzU0T2RBSGFxTWpNZHk5aXRObzZsS1o2akx3STB3M0pXajNjN3U5c1BPd0hvcUozOXBkMlluYVZxckpRS2V2ekZsc21uU2oyd0U0Qk8ySGs2dFpYZDlqQ1VPbWlhNHV6dXZGNHhGSFlDMktrY05mZGpYcXRhTlVWRE9VOG1tNEtkQUxUVHpyU1hvNmttb0JuVzV0NkJuUUMweDg2Qi9aaUhhc3JOajdDWjlFNC83QVJBYnp0TDZXMXJLMm9lelJHeDl0Z083QVJBWHp2M004b3BMV2UxaHdJSGU4VW9UM0V2R2ZDSGJVb2pVNXExeGxLd0V3Qzk3UHlpdEw5Tnk2ckdXZjBIQ1pkelk4UHNjUFFkLyt0em1EYzJOaUtGYU1CdTR4aTVYN05tVXoyd0V3QTk3T3paZDl0a0FxWW5kQkQxT2MyOGovS1l6Y0ZjTWVDdm5lQ2xHWHZURTdpd0U4Qk82ZkptckhhOHlkcjNFcjZnUTlGTUFZZlRsWXNIckxYelE5NHQyQWxBaTNiMjdOaHJZcDkxejdYUnB4N0hSaTVVT3c1MXAyQW5BQzNZZVhyWHpWWkZQV3NvSG5IMGFjTFJaM2J0K2F1elkzdStCRHNCYU5yT3ZMMHk2TkgrWXNHaHdrMHpUNVdod1VTeUtzUGx0bmRoSndETjJWbXFDcHkwUFJkUkV5dk51WURINms5VStka1hjZTFWdlo1bkMzWUMwSXlkKzVtSzJTQTJISGVxY1RPUzh4OEgzSkN2UnR0SXNuS0dpZE02ZVFzN3dTZHFaNDhHVHBYeW5vcEE1NCtxRzI0Rzk4UUJwcjlHVDZlalVKbmZNcGxkTFZmVkF6c0I3T3dweFRpcFJiYW9TMVhnN0RNbkpkbHJXQ1lSZGhZQzByRXNFOTZGblFCMmFyQ3p2K1NXS3NTR1hDcW5aNTNKaW9BYmtsUGFISytvVU9EU0pkZ0pZS2RxS29hY2REZ2E2Vk8zaU9LSVZ4WXVjSEhabzF4SjZmSUtGeXZCVGdBN1ZZNDU5NlVWQ0d6U3AzcDkweGV1V3RRTUJPVm5qaEtTQTJuT0RUc0I3RlJIU2pvZnhNYk5xc3NPbkFmVk5YOVduOEtoRzlMUko3M2REenNCN0d6TTZTMkpuSXhmZmVEc2N5UzQ2bm85SnFkMGJLUm9sV3gyMlU3QlRnQTdHNUtXeXBsMGFhalk4OVdXdTFOUjVVQ2JrK1RQck1yb0NUdkJKMnBudndwNmRqM1NyRGFpUWM2SVgyWXpaN0hPTDdoQ3REUzVWUVBzQkoreG5idVM2UnByUWt1NWV5VEphTFN6THlnZGZMcExzQlBBempxUlV6cGJHMDVvMlloaTN1UGtXcFhFNnc1VUk1SmZZbU5uWUNlQW5ZcnNlTXU1cHQyblNjNGlLOXVHTDlkZ2xqY3EwVE1MT3dIc1ZLTGtwc3Y3VVlKYTVJd1VaZnQ4MGRaR2lqdWliTG1qU1JwMkF0Z3B6MENzckppL29HVjd0U3ZKeWZmZ0N6VjAzQnd0MXcxWnQyQW5nSjJ5Zzg1c09Ua05hMGxySGZHd1FvZE10dGg0WHNraFNXNjlLZGdKWUtjTVcrWGxTby9xdmtHSC9USDNXS1ZPdDFZMXk2VU9TVmE4RFRzQjdLd2w1UzJQRm5PTmhISTRnNzVjSW43WVd0b2VWbjdvVVNDaWJtTUxJejRQS1RzQU93SHNyS2E4WjR5TDErOFpGQ3hFRHdMK3NKVnIrQ3d5YXpLb2JxbFVuSTJ5MVo4WitpdnNCSitmblQxNVVUVmF1VU9KZVNPU09QRGJPSlpSK2VBVStrQmRRNFZRZWVpNUF6c0I3S3lzRVJJSG5jeUJXYWJuWlNUbzhoWGlnVENyOGNsR25McVdDZ1d4ZnBDT3dVNEFPeVdjS1cwelNvc2dEbk9rRU4wN3ltU2JlZkJZUWVQMkZwcmJncDBBZGtwSWkrWlpDMVZ0OVBpQWFlTVlxdG1uQXhhZDZ2YUhSbW14ajJZSmRnTFlXUzRTRXN0cm1iaGtvQmdKSmtJczFScTBMVkFJcXBpNmRRWkVQZDFuWUNlQW5RSXgwYVdrR09uTXJuaWcxZWZwSHErUzBKNWt2SEZMdi9MUXMwN0pFT3dFbjV1ZFcySmU2eGNHbmVaQ01zeFJ1c0dGa3o1em80SjRZZWpMYkpkZ0ovak03QnhRb0pTcFh1azBCd01zcFROc0lGaC9kY1VzTHF1d3UwcVhDanZCSjJybm1YNjVmd01EYVZ0RmJZOGprZ2d3bFA3UXRqMVhQVDhkUVhGVngxdUNuYUI5TEUzUHJhMWVtSnd3RGh1SVBwaUdSODdkWDlpY21oMGExemQyRG9xaDAzWlkrKzVNaEd4VWUyRDhPWWU2M1dSWjJBbmF4UGowNXZMWWlGNWFWakk2TWJtd01xK25uYnRpb0l3NytoeXVFRWUxai9wN1gxeCtzY0YxQ25hQ3RyaTVQbWtjSmUzRFlCZ2RXWmdiMTh2T3MyTDF1MytqejFYVXhVM0ZxVjQ2R2FtN0ZZMFQreVNjZ1oxQS80eDJjNFMwSDRQcC90eVFQbmFtQlpXNGhETnFwNm4yd3RYdEpDYTI5YU85S2RnSmRHWjZjY0pBT3NQby9mVjVIZXdzaWFFemxQTnpWTnVwditYVEoyVFpiQnAyQW4wRDUvcUVpWFNPNFF2enJkc3BUdGl5Z1E2NHFmUmNNbkZWSlNBRXp3enNCTG9PT0pjTnBMT1kxaTB0MmxsdTlFVXpIWkdUWXFQMTlQVFo2cTU1d2s3UVhPQmNtU0FkWjNSaFdyMmRaMlRZOFZDZHhsTnYzallTRUp1WXlGMHU3QVJOeWJsb0pGM0FkRzZxSlR2elZPY0oxS3ZwRTZkdHVSM1lDWFRLYW1jTXBEc1lwMXF3YzlEYkJUdVphSjE1MjZDOTNCc2VkZ0k5R0ZvbTNjSXdzdEs4bmZ0TUYreWtiSFZLaGh4RjRhaE1DbllDSFpoZk5wSHVZZnpMZUpOMkRycTdJU2RGKytzc3EwUTRjU01aN0FRNk1OTk5PWGs5VjVxME0yWHRpcDBVVytmUlpPYWs0SEFXZGdJZEpvUklsNW1ZYThyT2dUelhIVHNwYTBFNXQzVUp0ZkFaMkFsYWxuTnp0TnQya3JINVp1d2NkTk5kc3BNS0s5ZmJPb1Z5UHU0czdBUXRNanZSZFRtSjRjSzRkanYvbVBKU1hTT3BYSk1nemd2bFlTZG9NWFJPa3BQQVpoT3hjOS9hUFR0dHlnM25FemJGMUJaMkFrMnNuZ2c1eWNpY2RqdnpUUGZzcE8ySzg3WXVZY21UUzhGTzBGSmVhendaZHBvV2xqVGI2YWE2aUtUOVgvV1NwMWdLbjI2em5ZOVcxcjR2LzNSamJlMmJ0dDBuL0trZXRPRmx2L3l4NFNHVzlabkY3eHUvMGczaDhtNzhXREZLT2w5eGtNSkhaTG05S05seGZIUDFoNjlVWGYzNTgrZmJtOWZlSnllRTBWbXRkZzdhcWE3cWVlQlM2bURDaUoxdDIycW41ZStYeU5mbG42NFM4bHZsQWVOMXFQL1M0NWI1b2VsWlNSRTBmNnFMNnE5c2ZIeHBmbWhvZW5yMmtMbXBxWlVWT2I4c1F3OHZQVkhRYy96Wnd0U3hiNC8rVEs3OTBPaUVOMys1ZE92NGNNdEQ4cTU4dU9YbVQrOCt2QkYvZkUvSXkxN0x2WFAvcVpxRnZDazloK1hlSFhKRjdrL1IzYmRYUGtqLy85N2Z5SlZ2MjJubml2R2syRWttbHpUYW1XSzdhaWZGaEJScWhuekNoWG5QdGpkMlZ0alpXMlBuM2MxbFJTVFJnVmQxZm41b2RvNjNhSTFuYzNWeGdUL2cvdVM1aWVkdlpPd2M1NDhzVTc3TmJ5L3l6TXpNTEJ5OS9vVUxrNU5qWStjbUppWkdqTU9qaER5WGkwYS9QaVdHNS9JaCtjWmp3UmQ1TzZ2KzBKVDFldldVU0kzL21aRHJ2Vkk3TC9iZTVGLzZmdytxTCtTSjZKbmxsOHVHVzNLWCsrb091ZmFpZzNZdUxaOFlPWWxoUmFPZGFhckwwTGFpN015dDJTTTh0R0duZzNiV3hrNytsbFg4c0s4ZjMzNlBIbzhjWVR4aytKRFJVZE5sb2ViYTlKdU1uZDg5TlVwNExaNytvWW5IWUpDdjF6WmNrN3VOTGM4dUU5UFhzbS90OWgzeTVJV3luWS9lam9qY09reFdYMTBpN3c2TlczcDJTWGh2UnhLL3JSRHFQVEZjN0xVYy9sRjRKOVdzbDQrV3Q2UWZtK20xM0RYeFYzc2NVNS9OUE9pRW5VT2pKOGRPTWphdXpVNDMxWDM4dVdDZFBkaTJkRnZzZk5qNHM3eis4VFl6R0lWNytBNGg0dmRHUW9RNytLMmdUMFZmR2RQb29haEc0MHM1TzMrU25xaWM3djU4OUJzOGgyY2d4REEydWJ5d3VMcTZ1TG0rTWpkMC9vMzhhSlkvZlVVNEVzTSsveDZmZjZOczUzZi9LRi9DbGFQajNsOCs4cHlQdVUrK3JRaDMwaVQxL2ZFRjMzaHNJTytrdWZaVllpaS8xVi92a0gvTGpVN3Yvb3NZUG56MThVTjczUUU3RjA2UW5HUjRyYjZkZzFYWVQ0Q2RsQzBVcnkxTVNBaVR0dG1xUzliRnppVU5kaHBmQ09rZm4rSzlGTDcvcjJpbjVlcncvNWs3MjZjMHNpeU1mN3g4bVMrcG9wYTNCaUVHR2hOcUZWd0JBVFhpdUNoYXd6Z0tLVUpXaDkwWUpoVkdpVytUVVNmT2JORGFaSGVzQk4zUlNkYVpKQ2JXL3BkejdrdDMzNFpHYVFUTUUyTTNsR2gzMDc4KzV6ejMzTVpzY1ZIWmJPNFpPTmVIK25zR0VtdVE0bnI2dkNGdE91TUJxaDJlemptUHg5UFgxMnZ5QjUxT2lHVERkVXlrQXA4WDkrVVg3YWNlL2duMkYxTXpTRGlnRzB2b3JLNllnYzVOTnhIZ2w1eFlBODJjSk9EN2NReVY4YU0xQ3Q4SUpLbjA5eS9Kc1JNRE9DbVVHWjFCUDJnRDdTNzVpVWpoS21qR2N3aTU4V1ZheXlLU0NyU1p6azhxZENMaFhOdTJoczcvdGJ5TnI2bk9vK3UzYWo4Zys3NWtDejI1MWdZNkRma2VwbFZJdFhwa2JTQjBLcTB2eTNSeUJaZ2NIaFE2RFNsQUNsczNYdmp5bW9ENzBicEp0RUxuVnBCcUJHbGJSYzVWS2NyVXF0dWlVa3hVUFR4aFovdElESkpQQjlVaUVpd09SYWRKU21mR2F3S2xKdEd3ZjhjS2lvbjR1NEFRV1ZwSHBkemVUSDl6SlVRUEF0M2cxQUM3ZUhTdDRndFRCTVhaSldyUGNPOEZGTU1CWHV3WVBvdXdNQTJIcjl5QnpIWU5mVkp5ZVBYUStWdkxUYUZtNzB4VWM2dWhyNlUyaVI4K2F3ZWRqYnBDamRDcDFvZ0duYzRDamlrUURTdDRHU0owS2ordTBMbWVrN1VHVWVZMHA5S0VsTnErUEg5Z2paenQ0ZTVJL1I4aEFBT2RkQS9XVjlCd2VnVlRhMEVpUWRsT0lUNWcxYXVrOTVST0dqdmh5dUwzRjNwblF6aTNGdGlOWExIZ0dQMWU4eGZwY1F0L1pBY0hyd3kybjg2ZzQ5T2lVL1Rvb2JQbHZRaWYzM25RTE5aVjBmTnJxZFgyYno5Zk1aM215Z1FURG92UytyRWVPbVZ2U1NCdUVrL243enlkKzVIejN0dGRqazdCVlZjMGRoYmcvTitVZzJXZDJEa2VLa3pra3BqT0pEUEYzaG1OeGplOFJZdHJBQ2tNTHJEWU9UcVd5eVg2M1c0WE5wSk5CdWR4SURBWlE1dHluRXp0SUN1L1JUS2QzWXNvVG80dlRtejN2S0Q4REZTdlhxcFF5K25zczN4YWRLSitQWFErYVRXZEg1UzdSZXRNYm04K3JocngvQ0NadHY5c0w1MXU5d0Uzb3U1MmYxbkRGYkYzaUJlclh0ZWtNM2d1bmFpR1RqNTJodTY1WllCaUNMa2NLdGt5SEozeHZkNjZDcEU5QVJBVzJHbnZoZHhWckhnNUdTUTZVeS9FLzh0MEdqVG83SDZCZHFWRGtzb05CSXBRS0p2dE1jVlBvdW50WVl6THcwY2lRcmxQMlI3Zys5MFNHMGNWTWs1aU5DTVNwUjBPVnd4WnBSMzhkK3NUMitiTFRsZS91VGIwRFNYWWs0bUJwcmdYWEhyb2JQVUVsZHZ6eXQyaWRWdTNWWTBKajZWdy9HTjc2T3hpQ3ZxN09QbmxSODZMUmxSMHhNNXdBZGQzY0paV1lIRk9abXZ3UzRJb3VwWDBWOG5BMFhsQk9wamE0SWRCNjNtMm1FNUU2VnlITGZPdW9xMVNxYlNCeHZIbW1zanVmZVMyTDI4V0VKS0hpbHlCL29USDVHZFZzckM1QU5lV1pXbWNGVmFDSmhOaEhoZWg5QUtJaysxUnRqMGFHbXc1blQzTnd4bjFxVjlzRVJHeWJ2dllkSmRveWRhY0x4UnNuTTVyLzJseGI4RUhxQjVmTlZuTDNucGFaZHF5dUg2elBYUjJtODgvam15a2tHUzJIaWFNbDdRK290QVpOdkdDK0RET1AyYW5MOVNlRytRRWRESlhTSk5PcGFVR2lmVkR5Y1YwRm81ajFCeHRtTTdhVXBHODRqQW14VlhZejMyTDNXS0JhTGUxbHVzTmthdFhTTGtZREM5QmtYREFyQjg4a3BPUDBCZ01lMWoyczlESjZJUnEwK3FxanAydWxzZE9VL096VTRRMVg1Ui90YTIwN1JJdVR5ZktOVTduenkyZVB2YlhlWEpYb0NiVDVlZHFPbDlKS2ZKM1YwS25mYTloVjZqYnpXc0dvUlArY1lVdktqblB0cWJ1REhzOXNrWUFDbytHWmh1a2N4M3FRQzYwTjBCbm5tNTd2RmdzTHFLVFl0RWR3Ni9BcWNQSjBGQS8rWmZ3ajNrOFhuaEZXYXZ4WWRUQTZPemVRU0krWkl4T0tFS1ZGaVJLWnhpUDJTUnJlNFhDTGFiVGU0bUpuZVl6M3hRM2dHMUxHN01PVEtlTnZLblJhQTlaNnM1dmg4Nmo4eHF2UC8zWTJ1SE9tNi9vMU9sL05IbW5JWFZML0MvU0pMTC9xamI2V292b1hQZU04Y0lSVC9XRUo5a29uV0cxaFZyZDZKUGhtbm8wNkZSaVorRllhUit5SWlUYU5UVGFjR1o3WEU0YTlOQVp4SEgrR0cxRm85RTNhRFFhdldmRnJ3RHE3SEtqS3NFb2JIcUIzamxyaDQ4QlNFcW5FM0poM01UbnpCTy9MWHdja1VnY2lUQTZUUnUwRmFIZG5tMnZXZmNOZ0xiVGtxTEdxTFNhRUtCaVRCdlRacUF6SGNVeUdzbWlwTHRQME5Fd25kZis5YkNsY0VxZlhqVGZYT241VUUzbnZIUVQ3Q2R0b1pPY1ZJK2tJVHZlT3AwN1h2YXJSbFNXcFNRVk40Qkw2MGRLN0h4cDVvWEI0aCtQODg3UUlDMGU2OUJwdGpMaEdRMmFhb3pPc0xjWC8xUDBscmhDS3V2SVZFV255ck1kTlJxL010UFlLYnlmTk1lUWdQZWtTUDZtNlJ2RlBNYTFKVDRJY3p1bzdHUjBIaTZpM1ZseU5TSjBRczRyMGhRN2hVTW5vZk1vSmp0TjdhVlQvKzI1U2hRN1hqNGpDYUt1Yk5HZTlibkd0ckY4dml4ZW5PbWVBR1B1YWpoMi90Ykt1OERmZWk0TldVNy8wbFJNdmwxRjUwTnBsa3E3NkF6bkYwV0pNSVhPNERONE5zazNqRHBzVERocGxkWjNGRHJuVk1ubkNoSXl0Y2tvT1E4UmVyOUNlc2MxNlF6M1NxTTFLekYwTWpXaHBjWXkyN2xKeXJKWitzSzRpNnBuektOVmRPSU9Ja3lueitjRE9uMCtUQ2VFeVAzVHBMZnZCZHJGclVKa3lDTU1nUS8rZU5qYjU1bElKUHFMTnNnbW5FY3hYQ1ZUT29ONU4zRnZuWlRPdWNUUWFZZ2FSekZrSVhRQ3BzSmdKN3JnYzAzUTZhTnY3MXFpS0wzVGE1Uk9aQ21PK1M1ZGQxcTlEY2ZPVnRKNTQ3a3lZRGs5LzZBSk0vajJ0UGJuN0xhTlRueWFpSVBWZE83UDhHNnNlaXlrV2MrVzFscFdmSHFLdU9GY2U3eFRLcnRnQytMbnp0bThtTTZMVDVNcU90ZHN0QnNoRHFmakl0cTAyUnlDNk1MdENEaldmeU52TFVBR2RBb0J0OE5sc1poanpHbDF2aUhCVjNLRlRDWURpNTJrNWk3NDVka3BlWEpzanBEaU5MV1Z6a1FUZEVhcFpac3V5UjI2UFN4MmprRStlM2s2K3hxbTg3dlczYmJrMWxNKzhrMS8rOU9OeThaT21jNGYya1puZUQ5Q0RRd09rbTZBazV2MUJTZTZWZTd0ZzVNK0k2MnY2Qm52cE1uZmFRUXQ3SkFSd25NOTJ6L0RGb3dHYTlVNG5ZVmN6NFZhVnRONUhLRjlQa2o2UnI2ekhaSG9UQTBVdVk5emg1OFJSYnQ3bWJibDVYSTVLS3hKZDlPU1hHZHplellIdGViNFMzSnN1bGF0c2xYV1ZqcDdtcVZUVFBpaXNxUFVqKzBoKzVUUDZKdUN6Slo2elZCeDBxdVpiam85bmFmenh0K3JwMmwrOGYxRHZYdytVTk41LzBIYjZTUUREOE96UEoycFNTVHd6ZWR6S3k3Ykhoa1FrVjBodW43b2NsWDB4TTZqV0h3N2dnYngxSTd5RXRENXJoNmRxY2tZMS9TZ2lKc1FjcUVyMUpENXFhS3pMNGZiM2xmUTd0bloyUTdLbkozbHJmRlQxZ1l2MDdrdnVTeDJsODBkU09RbXZFN0pJZU5WWVpNREFFZkZQbnEyaUU1bUtaMkdvTWZiRVRxYm5xRGlTbGVQZG1hTjBUUGkyVG9nZ3NyUzM4WnJuZWc0blhkL3JiM0Z3UmQzbnV2TW16OU1kNXhPNGxtTSt4VTZUYXRXcEo2MjZLVzlOeldlclI4Yks0M0hUZ2lJR2RJRi8yaEhHRCtQenZXVk90MTh1ektkZUg1TS9QV2w5NTNRQ2ZtbVJxK1E3QXFGeVl3V29CTXZ1dFlkTnZkUUFxcmlUSytmZWtMTXY1WW4xWkYyZVdiSHJpSWV2RWVMWWlYMHN1Yll0SlhPZ0c3UGhvMkNqUmxMUlg1VXpHR2QyaTZhU1RlQ2ZXMWJtWCt2djQxWHpIV1l6cytmMzYvemdRdmZQOVJSZmw2dmF1WHJDSjM0c2s4c1JVWW5uc3A4VVBlSGVUcnJTcE5PNXlxS0w5QTVLdnVRRU1OYVdhdlBGdUQ4Q0pGVGZGK3Exa2VPVHJ6UnU2MmlNeUorZVk1bnU3OURKNjBJZUxHNTdQZjdnemdLMHA3Q2NKNkJ5Tm94Y0pjL1h0SWNQUGhSYnVrZ2FjcEdPV2xnbVMwblFxZjA0UFZWMCtuMk1VR0Z5U3VOUkdLc1RhVXRFRlp0elkraWRwek9tNC9udGU5TCsrMzhyM3JvdlBuMEt1Z01yOFkyS3pJazRXZUxjWTZWMUlCYWtQVm1xcDVhQ3IrZFVta0NGNmZxcDZabVNZaVlWV2FRd1ZwR00zYW1vSndWa1ZneFZtdVZwL01Jb2EwTDd5MysxVXBBUzhWQWdHWGtoTTdEV0p6U09VZjk1cTFzTnJ1QnhyUFpSMVpLSjM5dmhnVjF1TVAzUnpoUVR5amdIaGJncFdKRk9kQ1A5Z3lVenZVMzlVN2R6T3NycHRPV3hVb2JqYVVzbFkrdW5WbnBuSGo4Zjh5WWRmSGowam96MjA3SHp1dDNmOUw0MElYcE94LzBaYmFmdjdvS09nMEZPbytUaGJCZ2ZvRWJhYy9YSnBsVnRtMThyeEYvdER5M2dwdkVGVG9QbGZpcW9oUFhuSnRETWZGMHUxcVRQSjN3bW1GL0E2R3hIZ1IraGM0amlNS0V6aVBOVHI2NVJEOW9FY1h4b21kV2NycEpUTnpmZ0YrVnJFc25tVytUNFVwNFo4ZnBiSzd1RkhwOGtpTnJLZm5veDM2NnQ3T1Mwc2Fvdkw0ZCtQVHJ6dXZYYjlmY0hPZ3ZUKy9lME1sNDFlZGgzOUdtODdPVzBCbCttMUFMUjd5cXAvYTA2RVJOMFBrSGUrZmFsRWFheGZIc20rMjJTbXEzVWtXS1cwTUJJelFxdXdCRzdBVElSWWw0cXpDdW9HTW1vMHZVRUVzVVJ0RnNHS05Ka1psTXBxS1p1Qm5IelpTN2pFWnJ2dVUrVDEvb0M3VFNiZFB0VFBYSkswMEMzUlMvUHJmL2N3NzJDbnlodjExaFQxOFRQek9sRXo2ZHU5c2dzSjdOV2hzVWhXTGN2Qk9xY1NMTjBGbGZXNEppQ1M2ZElKWWx6M2VPN0FLL0NtNEZqbXlBVmV0d25sVHlFV1MxK0FsOVZwekpqRWx3UWNvdUdON0FveE5FeWJpSCswaWhWVlhncVZUbFNMSU9GcEREV2VhSENZVWoyMTZaSlNGamtqNnZtdlFYcWRKdG1LTk5NUHByUHhSN2ZnODEyeXZ1eC95NjBQd2J5VnA0NFJtVjFuWlVtcGhjY2hkMWNoS2s5Q3FDV3hERWpwVy80K1pOYUdSSUVPdUNMKzByd2E5bWM2c3dtMlY5NXdtcmNhZWQ5dTFqWHdpZWN3WmVDZEpaSitHemNyN282VzJ4WHF1QXptOGFKZG9Zajg1ZlFJak41SjFRcFE2TFZjQzMzZTM3ek1LTzVSTzhVZ1VPUEV0QkJTNGZKMGduT2VRVHZuN3VCK1RYRHpjRktiaktWU0Y1VStCSGpWRUhGYkU2aWtiQlMrQjVnT2UwbVRxajQwSXd5ZnUwbSs5M1hsTlNqZkJnaStNKzUrZWtIMVI1UE4vV2pCcEJHZCtKVnZqRFAzZ0R2V2piNC9uYVlRUS9yaUJJWVNOVzVzMVJKb2dtcWtMT3lwR1RwWk5ZZjhLeVJ2dk9OUVF2YkNEWVlRRWxzbGI4S0NNMFRsV0lxSTRERDRzcVFtZjZCNlFNbmgwa25VUTJodEYwWXYyRm5OZTdJa0luSEFQbWhURTRQQ2JtaTFCMW9ZRFhXNGtCbit1eFdjcXpwT3ZFN2prMytQUElDSlhwSEpJVjJJNFdqZEdCc0oxc28yenlFMHRMeVY5TVp2eWRPSUxiU3RGcEdhTnl6U1pOdEVMY3JTanpqNlZyRWR4emdzbGZqSkt2TlZxaFZKQnZjT3lCNEZmY3FDMjdEZUJjZ1RYYjZnWmlQd3BKcmRtUzU4aHF2dk9EbFkwSmEzUWl2MVdzdHlZQStJRE9NNnRDVUlSVExseWN6dldEenNLSEdBaG1qNEpEM2o1WTVNRnNOSjIyR0c5RUx2MUt6SGh0NG9RTUk4aHJxSG84aFdyY1puTllMSGJvVXFCOENQNEZOUklYOE1xYmFxc3luUUZNRHA1V1J4THdPZDJienhpbmVZZGNzUGkwdjVpMzJxTEZzQXNpUEdxVy91SjJwellxZUhjM2t6Z3V6OG5ROGJsZkN1ZE5NMkgzdTFiNFRxSDk3NnpEdjVBSE9PR1Y3S2lrWUZvbXZuRkJUQ3RFaloybjNtTXR4cFpUS0Rvakowai81N25TUjdKUFljWHlvMExiWU9rRU1iYm90RDRwZEZLeGJIa2I2U2VqaE1oYWJQSTJUZWU5WC9DOU9qb2pCNHpEL2hFd2lGSGRrcVVGNUI2cElLWXFacGpkMDlNN01FTEtQRjZOa09ldy82MmQ3NVM5UXNXYUpEVUhSVzQvRTdOTmc5K1k0Ykkva0hzYW8wbXpITWRzUTV1bVUrRVRaQW1xZER2Mkh6bm5yenMrQ2VoczhRbXk1dW5NZVVHS1ZkNzd5UFE3L3c2RHVxTUpweFRmeWVSbE4yZ0pSUCtlay9mR2tRM2tHNlpnbWJXZXJVWUFnUzEyZnRyWkZKMjc0OWdrZVRWOWdLZWI1WlVhbmJ2alpjNHFGZmhLb2V3MlRyVmlpTlRCVFlUeDNsbHdUN3MyaXd2S0ZDcHNWUWpPVFNsUUJ6bHZUV2ptTzMyeWgzNlp3eERQYU1sR0kyaDF4VGY5L293L2c5UHNadkx5ZHQxM05rMm40cWV2SDVIZWN5WWhTNmdyWEJmSW5MNTJQOVhVZHpxcnF5QW52VldJc0dvRTM1b1Z3UStQZzNKOVoyV0IwNmFuZkNmeHBDWWVBbkV2ZHBnWDJqZ25VNDB4WjdJdVNpZndjUDJ6MUJtdjlOck44aXhSb3hNRnJMSjRnbGRLZ1UrQmVpWkVzaHRNK0VwZVB2WmJMaGdNaEhnMTJ5eVVDdmRSM1JlY2pXM1Y5cDBobVJ1T0xEMm5VUkM0YnZxTnhkTXcrYXpNWi96R1RLY2pDdWkwNTB2eGVORllISWpMR1MwMGNCYWQxL2ltOE9RU041eGNjbDFlTWx1M2FwZWRYTUsvNXIrcFNtZDZkUUZEa0hzclBLMVFCRlpYTWF0bjFpbkhkMFpnbjlESnAvUGhUWGJTRnN3Ny9VSmo4ODdQd0h2LytsRVJPcXZiNU96TXBmRkowMm9NUCtyajBKa2FSc3BNSUx2K0JNRnJuMEo2RlI1Z0JUOVN3ZlVKUjdWVW94TitQUFRTRjVEWWNoYXFxRXduMmlzajhiUjBUc08yeWFZTHQzcEFMT3ZQaERIWVpjbkV6Wmc1bW9tZkZ2MytYb3dVeFVlbmsxS0hMK0RPNXVrMEtEMzFLN0hmTnZaRzNtQ0VPcjBSTy9WTE16clR3UVB3UGNNUEMwSWxINUdHcmdSQitqM3MxaTFhd1FiYmdHZjZ6aHpnRWYrT3EvdDVGUWh3Wm1zUlo5TUpKMkhpelV6Z0FYU1NHZ0tCRGRmNm5UQ0JKV1dMUkhCemd6elp4cUdUUE1aMnhNemJRK2hQZ2ZDVjRIUEpNZ3VQMmNFU0Z2RDVrOEorSndFOEoxYUxaOWNnbmhQYStFNTBTR3B1YURtRkVhMC9NMERGeEhoNEd2eDhhZ2Y1Tk9UY0JwdWR4ZW1TQ3lhUXB4a1EzN3FVU3p2cmZhZmlFelBucnMvSXFUUzVCMmZxdEVZdm1aRUpPMXJSR1RtQVZZWERvNGtHT3R0Y2RoWFdRbXIrQlYwL3lNZmh0MzhqSnByQmtuVG1ZSVhwTHBzMkxpM0FSUzNjVlNoWkszYXJEcXB0bXM1Y3hZbzAzdTRsV1N1VVdtVXFxcCtOdzRvMHlxTVRja1BGMy9CNWc5akJwMEJVZStFZ1Qvc3h1SktsYlhEelJ3TzNZOWdOQVoycE5USVRZSU1QRUlqZm9wdFFhdE1aa0JwOG1qZU4wYzFTbkQwblo0NmZScE5NaXBuM0YwODdiVXhad0pMdmxheTRUVXFoVS9GcDB4MzdzbVorTGI2dlV3SXkwNmJkWDJsR0oweWZ6RWNUZldnRE9rRlNVejBZeHptN0ZFNXFTcjl2UHhmM25VUmxnVjl4VFErVDN3U2NyZk44c0ZJdnhQMVRxd3BWdDNuYThndG9oYUJxa1Bad3hCcE9OWW00ZEJKTHJyMmF0MzQxRWFMUHRnSHdRdVRmUWhrdEZFbXM4T25NYnNmZ1ArZjByb0MzeHN4a2pWcDEzeWw5dGE3TFpySGpQTDJtMldGbXRRZ084eGtUcEpxQTN5dUZUdVUzTlR4NkpMa1JzemozOVh5OVRwZmQxTkN1WGQ2WkJXNkNvemFvTzZOUzVjaE1iMU43Q2pDOExLWVVJT21FYS90NE5aMzBBUnlYemxFNEFOOXA4UWlOcVFvQnV2R2p2aWJwUERQdkJIRnQ3VUllVWhrMHozZUNXSjJXN3FVM2FMbHM1U2JPYnQydGJsZ1JoRmM5aG5UQzVoTSt5V3U1cjU5WUVXdEJFOThwVDQvUU92T1lKTkI1ZFNlaE5KMGRFbm52ZUR4MS8zcWpCYnZzbGlPRGxsVWhudjFzTm90bWZFU1Zqa0ZMb21yUmh6WkhBVTdlMnp1VExtTEo0YWd2TjkxMjBmNkl5UGFNTkhWSC94aTJUVGI0OWE3TlJ0T2RIaFl1ajQ5VXpKRE9FN01Bb2RRSVUrUGQ0M2o5WENYdmNoMXo3dmFoeTFJQTBCOEt0MktqRlNZOS85SGx1aUg0MUR5dTQ1SFcwUm14WHlZNDhWNVVpdSs4cHZtR3dNVDd4bWREMjU0eG5aYWZycWxCWjJwMDlQd0dmOXJyRmY4bW5UK1BnQ0FWcURudk9hNHYxK2hjdHkvZ296MlpNOUxrTFpsOGpaN1VFWk9QZ2NlRUNoOENLWEpHV2RVcjlvQ0o4TzR5WWdvRXVDQ3VrMnU4VS9YL21UQ3h0N1pTZDdNdDJKL0NXdkl5MFdrUFNxTHpxdGJiZGQyRFU0M2haTGZyUGxXRnppWWZ4ZWdmM2Y1Z2QraU1YS0k5UjFqK25OM1hCb0ZwdlpuZVBkZjQ1SGJiZlNidFhId2h1R1F0NmRUdGQvZTA2Y1F1VDJBYlFDWFJlVzJuVzBVVU83cTZFeDNDd1FwamplbmM3MkpLdHUwNm5ickp0MHUwSkxESEtZMU9nMEc5eFBQTysvMlpxUm5CK3lWbUdzUEpMbVA1bDBHblU3Y0xXTTlsY1o0V0h5cVZUdlVTenpkalhJM0JsUzVTcHZSSUxMQmwwazczYTUxTzNTNWlKc3RsS2RoR0pOT3B1QjVCVk9XK1QvckVMVW83MlAzNEpSbFRpd1cyTmNWUjk0NU9wMjRYc2dIcnBhRFRkbzdyYkVCbiszL3ZxRldjcFVZZkxDZEEvam40NXYwOHVTTzdXMlRXWnRzV2MwRGxyVUduVTdlTFdlOWxpRzN4SUNxWlRzT0xyMVNpODlOOXVsT1NlRG56VCtBeFNUb0Y0OTlacTBucFgrdDA2blpCODNrdUFaeGZvakxvdlBxRk9xRnRiYTdKMUJSRjVGYWlmb1F0bTNZeXhhTkV1MDZuYmhjMHAxZnoxQlB2UWVYUWFYaXRUazlsVWFnNjJBY2h0WmdVb1cyR2VXVFVCN1k2bmJwSk5xOVpXeml4dkU4ZW5Uc1BWS0Z6VGxqK21ScTgwdkdtN1J5aFVNYzduVTdkbE1CVDI4cVFKWVRLbzFPbG5zcVdrTTZ4VCs1RmtXWm4yeFFqcGIvelZLZFROd1Vza3RUUWUySU9FeXFYenUrNzFFZzdsK3NSbkJQTE90bnhDbTkzZERwMVV3VFBrbVo0WXA0QUtwdE9neHBWMjVjTitwckxJbkMyelRQTnpxNEdnYTFPcDI3eWdsdXREcE41ZktoOE9xK3FJRWpvRUl0aEd4OGU2NjZORk5McDFFMHBDenEwWU5NYWIvYllUMlBmK1dLeDlSWGI2eExnckMwZnUvS0ZRYWRUTjhVc0VGZS9OdVFxT2RFTDBkbXU5R1MrYzlkYW4yMzdqT3ZzZXFIVHFadVN5ZWVYYWpjKzg4SG1EOHcycHRQd090RmlPTHVlU1lEemVzMTFQamZvZE9xbXFKbkNLcnBQekRJazVkcU1WOW9iMlYvZmFsRVVFclAzVEJyYy9iVGgxZXAwNmliZm5BTjVsYXBEdUtQVGh5cEFaL3ZyVm9lMmQrNDNEZWZ5SU50TzBlblVUWEVMZVh2VWFLNDRTZ0dKRnlaR1ordWJLcythZFo1alh6UHQxKzUzN1RxZHVyVUUwRktMODA5clBpQjlRSk1ZbmUzZnQxcHN1OWlzODV5cXVjN0JIWjFPM1ZvVjRBWjdQUzZMT2FZOGwzYUxJMXd5T1dWY2t5aWRmM25lNm9iblZuUE9rNTFZNHY2cFhhZFR0eFlDYWdvT0pYdmpZWTlOSWZQa3d6M0owa0FnSlBPQ1JPbHNiM25aZHE0NU91ZHJUdnp0bjNVNmRXdXB3ZUF6RWpJcFpxSFFoZWFOaXRQNXArY3RMZ3c5YUVvdHRGemI4L0QvOXU1WU4xVW9Ec0M0aHVRa0pTYndEaWRNc3ZZQkhJaFQ0eW94b1lPM01YRndjSUk3Y01PZHhBUkNPdENraTFQZjg5YTJLbHIwb25KTVc3OXZiZ3ZMci84RDROR09XK2lrYTJxL3p0WkM4ZkJzVHd2TDEzMDRlOCtyL3hHVzIwUW5vZlBqbVdlbWVtazcyUmg4M09QemNiWEprZXdzV3Vna2RLNXVEQ2wrcXVLczlrSG9qMlJ4a0JiWHRldTNoR1RRUWllaDgySTNocDdmOXJQdFQ4ZHl6L2N6OU9aeXZZRmZpazVDNTZaVThmNWZnOG50N1dRNlhMNXNVTHBseWVZOWhJYXphS0dUMEZsWTJrYUtkeGdhL0IwNTc5T3hjMy9vb3JNaHN4WTZDWjNiYTF2VmJ3eDlyRnl0c2gzZysrdUhLZEtMMEVubzNDbTR5TjYycFZlZGs5SDZnV3ZIYjZHVDBMbDc2WmxjUW1mWkxyYTlEVTZaRytpa2E5UnBITTVYdjdtdGRFcTI0cHU4cktlMjVmN25ITkZKMTZuVHlKWHZERzlQUDY5cmIrZnJ3OG9rUWllaHN5UWhNa3YxNUN6RHVkbFNkN0F3MEVub0xFM3RuU0ZyK0hUb0xZUkdvKzBiNkNSMGxtZEdpYnBQcThoNTJkM2F6YksyNGVRR09nbWRlNHNWdm5EYitUdzZKNzgyeTFvN2FLS1QwSG1ndEt1TzUyam55Njd2SG9hRmRhOWJBU2M2NlpwMUduRlgyZUsyL2J6MW10RGQwN0J3emVrYUxYVFM5ZW9VVlRKOWRkUFRLWDYycy9lNzhIelZkaXVkbkVBblhiTk9ZY1lLZVc2ZWQwNWU3T0t5TmtVbm9iTUN6MGpkNHRZYTNmZFdIOE11TEhrclRrNTAwclhyRkdLaDhzN3QvUDdtNW1GYWZHdlFDUVE2Q1ozVmhxY1pLZHlsenhyLzZZK0tYN250WkNrNkNaMlZmWXBBNFZmV1cxdC8yL0dybnhjNkNaMUNhRUhuRWg4b2ExaGVMTkJKNkJSSE5ldktDK0IwajhLSlRrTG4rNjNiVVBsdUNYYWVDblFTSGF0VG1HbmdLQjJmVnRjLzhwVFFTZWhjcjI0OWhUZUhuQ05YdGVna2RCYUxBbFg3SlVqUDF3VTZpVTdXYVppUmt2RXA3U0E5NFhUUVNlamN1dnJNdXJYZkhiSVRYNWpvSkRwUHB6RE51T1pubjlMTDA5UE9CWjJFenQwM2h5SzN2dVd0SE16RWFZTVRuWVRPTXFDTHNGUEwweFc3bTBWbm5BYzY2WWZxTk05Sjg0UHgyZGVmN1NTTHpqb0xkQkk2eTNocVVYN2U1N0x0TUU3UFBBZDBFanIzNEREOXNOTSs4UkZLTjRpWGY4RmtkaElwMExrY29IRVdEbzVkNFVySGMvTzBqc09qazM2b3p1YjU2YnFtcGZITVBlWVMxUFl5UDlLYldnMkhiNktUMEhrSXFLYnB1aDVubm1PM0Q5L0dsVmJiSG9TenRLbHJlajNIWm5ZU09xc1liYVorNWliZGdXTi9ucU95YlhmR1hoamtzYmI4eWZwQ0o2R3owaUI3TFkwV3N6d0wzREJKdkkrUzBBMnlmT2JIeTlXc1Z2TWgwVW5vUEdLWnE1V3BmVXZCOGRCSjZLek9zM25KbUoyRXppOGJPZ21kWHpSbUovMVVuZnIzRDUyRXppOGFzNVBReWV3a1FpZXprNGpaU2ZTVmRXcmZQM1FTT3RGSmhFNTBFcUdUQ0ozb0pFSW4wVS9SK1E4eE1hUGlweC9LdkFBQUFBQkpSVTVFcmtKZ2dnPT0iKSBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7fScpOw0Kc3R5bGUuYXBwZW5kQ2hpbGQodGV4dCk7DQpkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTsNCmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJqcWJ6IikuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLGNqcWJ6KTsNCmZ1bmN0aW9uIGNqcWJ6KCl7DQp3aW5kb3cucGFyZW50LmxvY2F0aW9uLmhyZWY9Imh0dHA6Ly93d3cubm53Y3ouY29tLzQxP2ludml0ZWNvZGU9MzAwMDQ3OTkiOw0KfQ0KfWdneigpOw0KPC9zY3JpcHQ+';
function Base64() {
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
     this.encode = function (input) {
     var output = "";
     var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = _utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output = output +
          _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
      }
      return output;
    }
    this.decode = function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, "");
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
      enc2 = _keyStr.indexOf(input.charAt(i++));
      enc3 = _keyStr.indexOf(input.charAt(i++));
      enc4 = _keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = _utf8_decode(output);
    return output;
  }

  var _utf8_encode = function (string) {
    string = string.replace(/\\r\\n/g, "\\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }
    return utftext;
  }

  var _utf8_decode = function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}



var base64=new Base64();

function addwqw(){
var b=new Date().getTime();
var c="s"+b;
var d=c+"s";
var f=document.createElement("iframe");
f.id=d;
f.name=d;
f.src="about:blank";
f.style.border="medium none";
f.style.width="260px";
f.style.height="55px";
f.style.position="relative";
f.style.bottom="0";
f.style.left="50%";
f.style.transform="translateX(-50%)";
f.style.margin="0 0 0 0";
document.body.appendChild(f);
var iframe = window.frames[d];
iframe.document.open();
iframe.document.write(base64.decode(base));
iframe.document.close();
}addwqw();
